import { useEffect, useState } from 'react';
import CountUp from 'react-countup';


const getStats = () => fetch('//api.jasonmorofsky.com/stats');

export default function Statistics() {
    const [stats, setStats] = useState({
        'timestamp': 0,
        'Repositories': 0,
        'Languages Used': 0,
        'Commits': 0,
        'Deletions': 0,
        'Additions': 0,
        'KB of Code': 0
    });
    const [date, setDate] = useState('Unknown');

    useEffect(() => {
        getStats()
            .then(resp => resp.json())
            .then(respJson => {
                if (!('error' in respJson)) {
                    setStats(respJson);

                    const lastUpdateDate = new Date(respJson.timestamp);
                    setDate(lastUpdateDate.toLocaleString());
                };
            })
            .catch(err => console.log('Unable to fetch GitHub stats.'));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-3 gap-4 text-center max-w-sm'>
                {Object.entries(stats).map(([key, value]) => (
                    key != 'timestamp' &&
                    <div key={key} className='flex flex-col'>
                        <span><CountUp end={value} delay={0.5} redraw={true} /></span>
                        {key}
                    </div>
                ))}
            </div>

            <p className='lg:text-right text-sm sm:text-base font-thin mt-2'>
                These stats are updated automatically.<br />
                Last update: {date}.
            </p>
        </div>
    );
};
