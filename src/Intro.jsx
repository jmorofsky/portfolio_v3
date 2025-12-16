import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import intro from './assets/intro.gif';
import Boot from './Boot';


export default function Intro() {
    const navigate = useNavigate();

    const letters = [
        { text: 'P', delay: '4s' },
        { text: 'o', delay: '4.1s' },
        { text: 'r', delay: '4.4s' },
        { text: 't', delay: '4.25s' },
        { text: 'f', delay: '4.1s' },
        { text: 'o', delay: '4s' },
        { text: 'l', delay: '4.6s' },
        { text: 'i', delay: '4.5s' },
        { text: 'o', delay: '4.2s' }
    ];

    useEffect(() => {
            setTimeout(() => navigate('/home'), 6300);
        }, []);

    return (
        <>
            <Boot />
            
            <div className='w-fit m-auto mt-[20vh] opacity-0 animate-fadeIn'>
                <img
                    className='m-auto animate-expand rounded-full mb-4'
                    style={{ animationDelay: '5.5s' }}
                    src={intro}
                />

                <div className='flex gap-4 justify-center text-xl min-[400px]:text-2xl min-[560px]:text-4xl'>
                    <p className='animate-fadeOut' style={{ animationDelay: '5s' }}>
                        Jason Morofsky
                    </p>

                    <div className='font-thin text-amber-200'>
                        {letters.map(letter => (
                            <span
                                key={letter.text + '-' + letter.delay}
                                className='animate-fadeOut'
                                style={{ animationDelay: letter.delay }}
                            >
                                {letter.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
