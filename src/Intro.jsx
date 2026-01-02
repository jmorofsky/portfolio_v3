import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import intro from './assets/intro.gif';
import BinaryMatrix from './BinaryMatrix';


export default function Intro() {
    const navigate = useNavigate();

    const letters = [
        { text: 'P', delay: '3.5s' },
        { text: 'o', delay: '3.6s' },
        { text: 'r', delay: '3.9s' },
        { text: 't', delay: '3.75s' },
        { text: 'f', delay: '3.6s' },
        { text: 'o', delay: '3.5s' },
        { text: 'l', delay: '4.1s' },
        { text: 'i', delay: '4s' },
        { text: 'o', delay: '3.7s' }
    ];

    useEffect(() => {
        const navTimeout = setTimeout(() => navigate('/home'), 5400);

        return () => clearTimeout(navTimeout);
    }, []);

    return (
        <div className='animate-fadeOut m-auto w-full' style={{ animationDelay: '5.1s' }}>
            <BinaryMatrix />

            <div
                className={/* absolute positioning is used here so the <img> can overflow */
                    'absolute left-[50%] top-[50%] bg-[#0D0D0D] p-8 lg:p-16 rounded-3xl'
                }
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <img
                    className='m-auto animate-expand rounded-full mb-4'
                    style={{ animationDelay: '4.75s' }}
                    src={intro}
                />

                <div className='mt-6 flex gap-4 justify-center text-2xl text-nowrap sm:text-4xl'>
                    <p className='animate-fadeOut' style={{ animationDelay: '4.3s' }}>
                        Jason Morofsky
                    </p>

                    <div className='font-thin text-gold'>
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className='animate-fadeOut'
                                style={{ animationDelay: letter.delay }}
                            >
                                {letter.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
