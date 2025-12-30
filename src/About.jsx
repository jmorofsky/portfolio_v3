import Statistics from './Statistics';
import ScrollArrow from './ScrollArrow';


export default function About() {
    const headingClass = 'w-[200px] border-b border-neutral-500 text-xl'

    return (
        <>
            <ScrollArrow />

            <div id='content' className='absolute right-px top-100 min-[1000px]:top-px h-185 min-[1000px]:h-[95%] mt-4 flex flex-col items-end gap-6'>
                <p className={headingClass}>Education</p>

                <div className='mx-2 min-[520px]:mx-12 mb-12'>
                    <h1 className='text-xl min-[1200px]:text-3xl font-thin text-right'>Florida Polytechnic University</h1>
                    <p className='text-right'>Bachelor of Science, Computer Science</p>
                    <p className='text-right font-bold'>2021</p>

                    <div className='flex flex-col items-end mt-4'>
                        <ul className='min-[520px]:w-xs max-[520px]:text-sm'>
                            <li className='list-[square] mb-2'>
                                <span>Coursework</span> including Software Engineering, Database, Object-oriented
                                Programming, Data Structures, and Algorithms
                            </li>

                            <li className='list-[square]'>
                                Competed as a <span>player and coach</span> in varsity Rainbow Six: Siege esports
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mx-2 min-[520px]:mx-12 mb-12'>
                    <h1 className='text-xl min-[1200px]:text-3xl font-thin text-right'>Coral Glades High School</h1>
                    <p className='text-right'>Coral Springs, FL</p>
                    <p className='text-right font-bold'>2017</p>
                </div>


                <p className={headingClass}>Certifications</p>

                <div className='mx-2 min-[520px]:mx-12'>
                    <h1 className='text-3xl font-thin text-right'>ISC2 CC</h1>
                    <a
                        href='https://drive.google.com/file/d/1jfmA-c6MTHO63ZFA4x5JojRKjbtaiH3y/'
                        className='text-right hover:text-gold'
                        style={{ transition: 'all 0.33s' }}
                    >
                        Verification ↗
                    </a>
                    <p className='text-right font-bold'>March 2024</p>
                </div>

                <div className='mx-2 min-[520px]:mx-12 mb-12 flex flex-col items-end'>
                    <h1 className='text-3xl font-thin text-right'>CompTIA A+</h1>
                    <a
                        href='https://drive.google.com/file/d/14gXlEM-R71Q-qzi-ZTi-k_GkOap-5skG/'
                        className='text-right hover:text-gold'
                        style={{ transition: 'all 0.33s' }}
                    >
                        Verification ↗
                    </a>
                    <p className='text-right font-bold'>June 2023</p>
                </div>


                <p className={headingClass}>GitHub Stats</p>
                <Statistics />
            </div>
        </>
    );
};
