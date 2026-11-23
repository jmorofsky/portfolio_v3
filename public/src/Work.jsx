import ScrollArrow from './ScrollArrow';


export default function Work() {
    const ulClass = 'mt-4 flex flex-col gap-2 list-[square] text-sm sm:text-base max-w-md';

    return (
        <>
            <ScrollArrow />

            <div
                id='content'
                className='flex flex-col lg:items-end gap-8'
            >
                <div>
                    <h1 className='lg:text-right text-3xl font-thin'>red violet</h1>
                    <p className='lg:text-right'>Software Engineer</p>
                    <p className='lg:text-right font-bold'>June 2025 - Present</p>

                    <ul className={ulClass}>
                        <li>
                            Maintain and extend <span>Apache Airflow DAGs</span> processing 1,000–3,000 files per weekday (1 row to 30M+) for <span>hundreds of customers.</span>
                        </li>
                        <li>
                            Migrated Airflow from EC2 to <span>AWS MWAA</span> with file processing on <span>ECS,</span> removing OS and container patching and <span>auto-scaling</span> workers with demand.
                        </li>
                        <li>
                            Rewrote the operations dashboard from AngularJS to <span>React</span> for customer, profile, and billing configuration and <span>real-time job monitoring and control.</span>
                        </li>
                        <li>
                            Migrated the test framework from Selenium to <span>Playwright,</span> cutting run time from ~20 to 11–12 minutes and flaky failures from 5–10% to zero.
                        </li>
                        <li><span>Mentor</span> junior engineers and train new hires.</li>
                        <li><span>Collaborated across teams</span> with QA, cloud operations, and other verticals to ensure maximum quality, uptime, and functionality.</li>
                        <li className='list-none mt-4'>
                            <span>Full-stack</span> engineer developing a secure, large-scale <span>data processing system</span> handling PII using Airflow, React, and MySQL. AWS (MWAA, ECS, S3, RDS, CloudWatch, Secrets Manager) is used for infrastructure deployment and monitoring.
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='lg:text-right'>Quality Assurance Engineer</p>
                    <p className='lg:text-right font-bold'>May 2024 - June 2025</p>

                    <ul className={ulClass}>
                        <li>
                            Rewrote existing <span>UI automation</span> test suite from the
                            ground up, fixing broken test cases and writing dozens of new ones,
                            massively expanding test coverage and reliability.
                        </li>
                        <li>
                            Developed front-end <span>API wrapper,</span> allowing for much
                            quicker API calls rather than slower UI automation for certain repetitive
                            testing tasks.
                        </li>
                        <li>
                            Worked alongside relevant stakeholders to <span>optimize</span> the smoke
                            testing and regression <span>process</span> to ensure maximum coverage
                            with as little unnecessary testing as possible.
                        </li>
                        <li>
                            <span>Created automation</span> for the entire smoke testing and
                            regression checklist, including UI, API, and system tests, saving
                            hours of manual testing time each release.
                        </li>
                        <li>Helped team transition from a <span>waterfall to agile</span> SDLC.</li>
                        <li className='list-none mt-4'>
                            I was the sole manual and automation QA engineer for the product
                            <span> idiBATCH,</span> a data processing system which generates
                            millions in revenue each year.
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='lg:text-right text-3xl font-thin'>Airfind</h1>
                    <p className='lg:text-right'>Quality Assurance Analyst</p>
                    <p className='lg:text-right font-bold'>September 2021 - August 2022</p>

                    <ul className={ulClass}>
                        <li>
                            <span>Triaged</span> stories with developers and created comprehensive <span>test plans.</span>
                        </li>
                        <li>
                            Created a suite of <span>Postman API test cases,</span> greatly increasing testing coverage while reducing manual load.
                        </li>
                        <li>
                            Each sprint, executed <span>smoke</span> and <span>regression</span> tests, plus tests for new user stories.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
