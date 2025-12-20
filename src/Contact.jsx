export default function Contact() {
    return (
        <div className='flex flex-col gap-1 absolute bottom-px right-px m-14 font-bold items-end'>
            <a
                href='https://www.linkedin.com/in/jason-morofsky/'
                className='hover:text-gold hover:text-lg w-fit'
                style={{ transition: 'all 0.33s' }}
            >LinkedIn ↗
            </a>

            <a
                href='https://github.com/jmorofsky/'
                className='hover:text-gold hover:text-lg w-fit'
                style={{ transition: 'all 0.33s' }}
            >
                GitHub ↗
            </a>

            <a
                href='mailto:contact@jasonmorofsky.com'
                className='hover:text-gold hover:text-lg w-fit'
                style={{ transition: 'all 0.33s' }}
                title='Email Me'
            >
                contact@jasonmorofsky.com ↗
            </a>

            <a
                href="https://storage.googleapis.com/jasonmorofsky/JasonMorofsky'sResume.pdf"
                className='hover:text-gold hover:text-lg w-fit'
                style={{ transition: 'all 0.33s' }}
            >
                Resume ↓
            </a>
        </div>
    );
};
