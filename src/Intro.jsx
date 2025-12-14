import intro from './assets/intro.gif';


export default function Intro() {
    const letters = [
        { text: 'P', delay: '3s' },
        { text: 'o', delay: '3.1s' },
        { text: 'r', delay: '3.4s' },
        { text: 't', delay: '3.25s' },
        { text: 'f', delay: '3.1s' },
        { text: 'o', delay: '3s' },
        { text: 'l', delay: '3.6s' },
        { text: 'i', delay: '3.5s' },
        { text: 'o', delay: '3.2s' }
    ];

    return (
        <div className='w-fit m-auto mt-[20vh] opacity-0 animate-fadeIn'>
            <img
                className='m-auto animate-expand rounded-full mb-4'
                style={{ animationDelay: '4.5s' }}
                src={intro}
            />

            <div className='flex gap-4 justify-center text-2xl min-[560px]:text-4xl'>
                <p className='animate-fadeOut' style={{ animationDelay: '4s' }}>
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
    );
};
