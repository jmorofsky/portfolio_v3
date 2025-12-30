import { useState, useEffect } from 'react';


export default function ScrollArrow() {
    const [scrollStarted, setScrollStarted] = useState(false);
    const [scrollFinished, setScrollFinished] = useState(false);
    const [arrowClass, setArrowClass] = useState(
        'absolute bottom-px right-2 text-2xl text-gold animate-bounce max-[520px]:opacity-0'
    );

    useEffect(() => {
        let hasVerticalScroll = false;

        const element = document.getElementById('content');
        element.addEventListener('scroll', handleScroll);

        if (element.scrollHeight > element.clientHeight) hasVerticalScroll = true;

        hasVerticalScroll ? null : setScrollFinished(true);

        return () => element.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (!scrollStarted && !scrollFinished) {
            setScrollStarted(true);
            setArrowClass(
                'absolute bottom-px right-2 text-2xl text-gold animate-bounce opacity-0'
            );
            setTimeout(() => setScrollFinished(true), 250);
        };
    };

    return (
        <>
            {!scrollFinished && <div className={arrowClass} style={{ transition: 'all 0.25s' }}>⇣</div>}
        </>
    );
};
