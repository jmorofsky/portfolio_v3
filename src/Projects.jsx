import ScrollArrow from './ScrollArrow';


export default function Projects() {
    const h1Class = 'lg:text-right text-xl md:text-3xl font-thin';
    const aClass = 'lg:text-right hover:text-gold text-xs md:text-sm';
    const pClass = 'lg:text-right font-bold mt-1';
    const divClass = 'mt-4 max-w-md text-sm sm:text-base flex flex-col gap-2';

    return (
        <>
            <ScrollArrow />

            <div
                id='content'
                className='flex flex-col lg:items-end gap-8'
            >
                <div>
                    <h1 className={h1Class}>Portfolio</h1>
                    <p className='lg:text-right'><a
                        href='https://github.com/jmorofsky/portfolio_v3'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        github.com/jmorofsky/portfolio_v3 ↗
                    </a></p>
                    <p className={pClass}>December 2025</p>

                    <div className={divClass}>
                        <p>This website - my <span>interactive portfolio.</span></p>
                        <p>GitHub's API provides <span>statistics,</span> updated automatically.</p>
                    </div>
                </div>

                <div>
                    <h1 className={h1Class}>Blog</h1>
                    <p className='lg:text-right'><a
                        href='https://blog.jmorofsky.com'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        blog.jmorofsky.com ↗
                    </a></p>
                    <p className='lg:text-right'><a
                        href='https://github.com/jmorofsky/blog'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        github.com/jmorofsky/blog ↗
                    </a></p>
                    <p className={pClass}>November 2025</p>

                    <div className={divClass}>
                        <p>My personal <span>blog.</span></p>
                        <p>Here, I write <span>posts</span> about what I've been <span>working on.</span></p>
                        <p>You can read my post about the creation of the site&nbsp;
                            <span><a
                                href='https://blog.jasonmorofsky.com/0'
                                target='_blank'
                            >
                                here ↗.
                            </a></span>
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className={h1Class}>Website Monitor</h1>
                    <p className='lg:text-right'><a
                        href='https://github.com/jmorofsky/website-monitor'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        github.com/jmorofsky/website-monitor ↗
                    </a></p>
                    <p className={pClass}>September 2025</p>

                    <div className={divClass}>
                        <p>
                            Python <span>script</span> which sends an email if it's unable to receive a
                            response from a specified website.
                        </p>
                        <p>
                            Designed to <span>alert</span> the user if any of their sites are experiencing
                            <span> downtime.</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className={h1Class}>Trump Truth Tracker</h1>
                    <p className='lg:text-right'><a
                        href='https://github.com/jmorofsky/TrumpTruthTracker'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        github.com/jmorofsky/TrumpTruthTracker ↗
                    </a></p>
                    <p className={pClass}>April 2025</p>

                    <div className={divClass}>
                        <p>
                            Receive an <span>email</span> whenever @realDonaldTrump posts a
                            <span> new status</span> to Truth Social.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className={h1Class}>Medicare with Meghan Morofsky</h1>
                    <p className='lg:text-right'><a
                        href='https://meghanexplainsmedicare.com'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        meghanexplainsmedicare.com ↗
                    </a></p>
                    <p className='lg:text-right'><a
                        href='https://github.com/jmorofsky/medicare-info'
                        target='_blank'
                        className={aClass}
                        style={{ transition: 'color 0.33s' }}
                    >
                        github.com/jmorofsky/medicare-info ↗
                    </a></p>
                    <p className={pClass}>August 2021</p>

                    <div className={divClass}>
                        <p>An <span>informational website.</span></p>
                        <p>
                            Created to <span>help</span> potential <span>customers</span> learn
                            about Medicare, how Meghan can help them, and how to contact her.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
