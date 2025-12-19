import express from 'express';
import 'dotenv/config';
import fetch from 'node-fetch';
import { readFile, writeFile } from 'node:fs/promises';


const app = express();
const port = 4000;


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
            "timestamp": 0,
            "repositories": 0,
            "languages": 0,
            "commits": 0,
            "deletions": 0,
            "additions": 0,
            "kb": 0
        };
    };
};

function isStatsObjValid(statsObj) {
    const requiredKeys = ['timestamp', 'repositories', 'languages',
        'commits', 'deletions', 'additions', 'kb'];

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
        return statsJson;
    };

    const completedObj = {
        'timestamp': null,
        'repositories': null,
        'languages': null,
        'commits': null,
        'deletions': null,
        'additions': null,
        'kb': null
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
    completedObj.repositories = statsJson.length;
    completedObj.languages = languages.length;
    completedObj.commits = commits;
    completedObj.deletions = deletions;
    completedObj.additions = additions;
    completedObj.kb = size;

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
    const oneHourHasElapsed = false;
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
