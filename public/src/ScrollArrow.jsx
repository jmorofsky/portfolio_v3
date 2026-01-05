import { useState, useEffect } from 'react';


export default function ScrollArrow() {
    const [scrollStarted, setScrollStarted] = useState(false);
    const [scrollFinished, setScrollFinished] = useState(false);
    const [arrowClass, setArrowClass] = useState(
        'fixed bottom-12 right-14 w-fit text-2xl text-gold animate-bounce opacity-0 lg:opacity-100'
    );

    useEffect(() => {
        let hasVerticalScroll = false;

        const element = document.getElementById('main');
        element.addEventListener('scroll', handleScroll);

        if (element.scrollHeight > element.clientHeight) hasVerticalScroll = true;

        hasVerticalScroll ? null : setScrollFinished(true);

        return () => element.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (!scrollStarted && !scrollFinished) {
            setScrollStarted(true);
            setArrowClass(
                'fixed bottom-6 md:bottom-12 right-8 md:right-14 w-fit text-2xl text-gold animate-bounce opacity-0'
            );
            setTimeout(() => setScrollFinished(true), 250);
        };
    };

    return (
        <>
            {!scrollFinished && <div className={arrowClass} style={{ transition: 'opacity 0.25s' }}>⇣</div>}
        </>
    );
};
