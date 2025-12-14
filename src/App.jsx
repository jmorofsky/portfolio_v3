import { useState, useEffect } from 'react';
import Intro from './Intro';
import Boot from './Boot';


export default function App() {
    const [bootVisible, setBootVisible] = useState(true);
    const [introVisible, setIntroVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => { setBootVisible(false); setIntroVisible(true) }, 5200);
    }, []);

    if (bootVisible) return <Boot />;
    if (introVisible) return <Intro />;

    return (
        <>
        </>
    );
};
