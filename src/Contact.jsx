export default function Contact() {
    const aClass = 'hover:text-gold hover:text-base sm:hover:text-lg w-fit';

    return (
        <div className='flex flex-col gap-1 absolute bottom-px right-px m-6 lg:m-14 font-bold text-sm sm:text-base items-end'>
            <a
                href='https://www.linkedin.com/in/jason-morofsky/'
                className={aClass}
                style={{ transition: 'all 0.33s' }}
            >LinkedIn ↗
            </a>

            <a
                href='https://github.com/jmorofsky/'
                className={aClass}
                style={{ transition: 'all 0.33s' }}
            >
                GitHub ↗
            </a>

            <a
                href='mailto:contact@jasonmorofsky.com'
                className={aClass}
                style={{ transition: 'all 0.33s' }}
                title='Email Me'
            >
                contact@jasonmorofsky.com ↗
            </a>

            <a
                href="https://storage.googleapis.com/jasonmorofsky/JasonMorofsky'sResume.pdf"
                className={aClass}
                style={{ transition: 'all 0.33s' }}
            >
                Resume ↓
            </a>
        </div>
    );
};
