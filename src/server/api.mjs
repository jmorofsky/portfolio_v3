import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fetch from 'node-fetch';
import { readFile, writeFile } from 'node:fs/promises';


const app = express();
const port = 4000;
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


let activeRequestPromise = null;
let cachedData = await loadExistingData();
let lastFetchTime = cachedData.timestamp;

const REFRESH_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

const options = {
    method: 'GET',
    headers: {
        'authorization': process.env.API_KEY,
        'accept': 'application/vnd.github+json'
    }
};


async function loadExistingData() {
    try {
        const jsonString = await readFile('./src/server/stats.json', { encoding: 'utf8' });
        const existingStats = await JSON.parse(jsonString);

        if (isStatsObjValid(existingStats)) {
            return existingStats;
        } else {
            throw new Error();
        };
    } catch {
        return {
            'timestamp': 0,
            'Repositories': 0,
            'Languages Used': 0,
            'Commits': 0,
            'Deletions': 0,
            'Additions': 0,
            'KB of Code': 0
        };
    };
};

function isStatsObjValid(statsObj) {
    const requiredKeys = ['timestamp', 'Repositories', 'Languages Used',
        'Commits', 'Deletions', 'Additions', 'KB of Code'];

    const hasAllKeys = requiredKeys.every(key =>
        Object.prototype.hasOwnProperty.call(statsObj, key)
    );

    const valuesAreTruthy = !Object.values(statsObj).some(value => !value);

    if (hasAllKeys && valuesAreTruthy) return true; else return false;
};

async function getNewStatsJson() {
    const url = 'https://api.github.com/users/jmorofsky/repos';

    try {
        const resp = await fetch(url, options);
        const respJson = await resp.json();

        return respJson;
    } catch (err) {
        return { error: err };
    };
};

async function getRepoLanguages(repo) {
    let url;
    if ('languages_url' in repo) {
        url = repo.languages_url;
    } else {
        return [];
    };

    try {
        const resp = await fetch(url, options);
        const respJson = await resp.json();

        return Object.keys(respJson);
    } catch {
        return [];
    };
};

async function getRepoCommitInfo(repo) {
    const stats = {
        commits: 0,
        additions: 0,
        deletions: 0
    };

    let url;
    if ('commits_url' in repo) {
        url = repo.commits_url.slice(0, -6);
    } else {
        return stats;
    };

    try {
        const resp = await fetch(url, options);
        const respJson = await resp.json();

        stats.commits = respJson.length;

        for (const commit of respJson) {
            let commitUrl;
            if ('url' in commit) {
                commitUrl = commit.url;
            } else {
                continue;
            };

            const commitResp = await fetch(commitUrl, options);
            const commitRespJson = await commitResp.json();

            if ('files' in commitRespJson) {
                for (const file of commitRespJson.files) {
                    if ('additions' in file && 'deletions' in file) {
                        stats.additions += file.additions;
                        stats.deletions += file.deletions;
                    };
                };
            };
        };
    } catch {
        ;
    } finally {
        return stats;
    };
};

async function getNewStats() {
    const statsJson = await getNewStatsJson();
    if ('error' in statsJson) {
        return;
    };

    const completedObj = {
        'timestamp': null,
        'Repositories': null,
        'Languages Used': null,
        'Commits': null,
        'Deletions': null,
        'Additions': null,
        'KB of Code': null
    };

    let languages = [];
    let commits = 0;
    let deletions = 0;
    let additions = 0;
    let size = 0;
    for (const repo of statsJson) {
        const repoLanguages = await getRepoLanguages(repo);
        for (const language of repoLanguages) {
            if (!languages.includes(language)) {
                languages.push(language);
            };
        };

        const commitInfo = await getRepoCommitInfo(repo);
        commits += commitInfo.commits;
        deletions += commitInfo.deletions;
        additions += commitInfo.additions;

        size += repo.size;
    };

    completedObj.timestamp = Date.now();
    completedObj['Repositories'] = statsJson.length;
    completedObj['Languages Used'] = languages.length;
    completedObj['Commits'] = commits;
    completedObj['Deletions'] = deletions;
    completedObj['Additions'] = additions;
    completedObj['KB of Code'] = size;

    if (isStatsObjValid(completedObj)) {
        cachedData = completedObj;

        const jsonString = JSON.stringify(completedObj);
        await writeFile('./src/server/stats.json', jsonString, { encoding: 'utf8' });
    };
};


app.get('/stats', async (req, res) => {
    const cachedDataIsValid = isStatsObjValid(cachedData);
    cachedDataIsValid ?
        res.send(cachedData)
        :
        res.send({ error: 'Invalid data detected.' });

    const now = Date.now();
    let oneHourHasElapsed = false;
    if (now - lastFetchTime > REFRESH_INTERVAL) oneHourHasElapsed = true;

    if (activeRequestPromise || !oneHourHasElapsed) return;

    try {
        activeRequestPromise = getNewStats();
        lastFetchTime = Date.now();
    } catch {
        ;
    } finally {
        activeRequestPromise = null;
    };
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
