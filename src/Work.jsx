export default function Work() {
    return (
        <div id='content' className='absolute right-px top-px flex flex-col items-end gap-8 mt-6 mx-12'>
            <div>
                <h1 className='text-right text-3xl font-thin'>red violet</h1>
                <p className='text-right'>Software Engineer</p>
                <p className='text-right font-bold'>June 2025 - Present</p>

                <ul className='mt-4 flex flex-col gap-2 w-xs list-[square]'>
                    <li>
                        Built and maintained complex Apache <span>Airflow DAGs</span> for
                        automated data pipeline orchestration.
                    </li>
                    <li>
                        Developed <span>React dashboard</span> for real-time workflow
                        monitoring and configuration management.
                    </li>
                    <li>
                        Processed <span>millions of records</span> each day according to
                        detailed configuration and <span> billed customers</span> appropriately.
                    </li>
                    <li>
                        <span>Collaborated across teams</span> with QA, cloud operations, and
                        other verticals to ensure maximum quality, uptime, and functionality.
                    </li>
                    <li className='list-none mt-4'>
                        <span>Full-stack</span> engineer developing a secure, large-scale
                        <span> data processing system</span> handling PII using Airflow, a
                        React frontend, and MySQL and PostgreSQL databases. AWS used for
                        infrastructure deployment and monitoring.
                    </li>
                </ul>
            </div>

            <div>
                <p className='text-right'>Quality Assurance Analyst</p>
                <p className='text-right font-bold'>May 2024 - June 2025</p>

                <ul className='mt-4 flex flex-col gap-2 w-xs list-[square]'>
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
                    <li className='list-none mt-4'>
                        I was the sole manual and automation QA engineer for the product
                        <span> idiBATCH,</span> a data processing system which generates
                        millions in revenue each year.
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='text-right text-3xl font-thin'>Airfind</h1>
                <p className='text-right'>Quality Assurance Analyst</p>
                <p className='text-right font-bold'>September 2021 - August 2022</p>

                <ul className='mt-4 flex flex-col gap-2 w-xs list-[square]'>
                    <li>
                        <span>Triaged</span> stories and created comprehensive <span>testing plans.</span>
                    </li>
                    <li>
                        Helped create a suite of <span>automated test cases</span> using Postman, greatly
                        increasing testing coverage while reducing manual load.
                    </li>
                    <li>
                        Each sprint, executed <span>smoke</span> and <span>regression</span> tests.
                    </li>
                </ul>
            </div>
        </div>
    );
};
