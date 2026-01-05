import Statistics from './Statistics';
import ScrollArrow from './ScrollArrow';


export default function About() {
    const divClass = 'flex flex-col lg:items-end';
    const headingClass = 'text-left border-b border-neutral-500 text-xl w-fit mb-4'
    const h1Class = 'lg:text-right text-xl md:text-3xl font-thin';
    const aClass = 'lg:text-right hover:text-gold text-xs md:text-sm';

    return (
        <>
            <ScrollArrow />

            <div
                id='content'
                className='flex flex-col lg:items-end gap-8'
            >
                <div className={divClass}>
                    <p className={headingClass}>Education</p>
                    <h1 className={h1Class}>
                        Florida Polytechnic University
                    </h1>
                    <p className='lg:text-right'>Bachelor of Science, Computer Science</p>
                    <p className='lg:text-right font-bold'>2021</p>

                    <ul className='mt-4 flex flex-col gap-2 list-[square] text-sm sm:text-base max-w-md'>
                        <li>
                            <span>Coursework</span> including Software Engineering, Database, Object-oriented
                            Programming, Data Structures, and Algorithms
                        </li>
                        <li>
                            Competed as a <span>player and coach</span> in varsity Rainbow Six: Siege esports
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className={h1Class}>Coral Glades High School</h1>
                    <p className='lg:text-right'>Coral Springs, FL</p>
                    <p className='lg:text-right font-bold'>2017</p>
                </div>

                <div className={divClass}>
                    <p className={headingClass}>Certifications</p>
                    <h1 className={h1Class}>ISC2 CC</h1>
                    <p className='lg:text-right'><a
                        href='https://drive.google.com/file/d/1jfmA-c6MTHO63ZFA4x5JojRKjbtaiH3y/'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        Verification ↗
                    </a></p>
                    <p className='lg:text-right font-bold mt-1'>March 2024</p>
                </div>

                <div>
                    <h1 className={h1Class}>CompTIA A+</h1>
                    <p className='lg:text-right'><a
                        href='https://drive.google.com/file/d/14gXlEM-R71Q-qzi-ZTi-k_GkOap-5skG/'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        Verification ↗
                    </a></p>
                    <p className='lg:text-right font-bold mt-1'>June 2023</p>
                </div>

                <div className={divClass}>
                    <p className={headingClass}>GitHub Stats</p>
                    <Statistics />
                </div>
            </div>
        </>
    );
};
