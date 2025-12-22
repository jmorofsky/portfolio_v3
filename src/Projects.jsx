export default function Projects() {
    return (
        <div id='content' className='absolute right-px top-px flex flex-col items-end gap-8 mt-6 mx-12'>
            <div>
                <h1 className='text-right text-3xl font-thin'>Portfolio</h1>
                <p className='text-right'><a
                    href='https://github.com/jmorofsky/portfolio_v3'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    github.com/jmorofsky/portfolio_v3 ↗
                </a></p>
                <p className='text-right font-bold'>December 2025</p>

                <div className='mt-4 w-xs flex flex-col gap-2'>
                    <p>This website - my <span>interactive portfolio.</span></p>
                    <p>GitHub's API provides <span>statistics,</span> updated automatically.</p>
                </div>
            </div>

            <div>
                <h1 className='text-right text-3xl font-thin'>Blog</h1>
                <p className='text-right'><a
                    href='https://blog.jmorofsky.com'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    blog.jmorofsky.com ↗
                </a></p>
                <p className='text-right'><a
                    href='https://github.com/jmorofsky/blog'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    github.com/jmorofsky/blog ↗
                </a></p>
                <p className='text-right font-bold'>November 2025</p>

                <div className='mt-4 w-xs flex flex-col gap-2'>
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
                <h1 className='text-right text-3xl font-thin'>Website Monitor</h1>
                <p className='text-right'><a
                    href='https://github.com/jmorofsky/website-monitor'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    github.com/jmorofsky/website-monitor ↗
                </a></p>
                <p className='text-right font-bold'>September 2025</p>

                <div className='mt-4 w-xs flex flex-col gap-2'>
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
                <h1 className='text-right text-3xl font-thin'>Trump Truth Tracker</h1>
                <p className='text-right'><a
                    href='https://github.com/jmorofsky/TrumpTruthTracker'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    github.com/jmorofsky/TrumpTruthTracker ↗
                </a></p>
                <p className='text-right font-bold'>April 2025</p>

                <div className='mt-4 w-xs flex flex-col gap-2'>
                    <p>
                        Receive an <span>email</span> whenever @realDonaldTrump posts a
                        <span> new status</span> to Truth Social.
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-right text-3xl font-thin'>Medicare with Meghan Morofsky</h1>
                <p className='text-right'><a
                    href='https://meghanexplainsmedicare.com'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    meghanexplainsmedicare.com ↗
                </a></p>
                <p className='text-right'><a
                    href='https://github.com/jmorofsky/medicare-info'
                    target='_blank'
                    className='hover:text-gold'
                    style={{ transition: 'all 0.33s' }}
                >
                    github.com/jmorofsky/medicare-info ↗
                </a></p>
                <p className='text-right font-bold'>August 2021</p>

                <div className='mt-4 w-xs flex flex-col gap-2 absolute right-px'>
                    <p>An <span>informational website.</span></p>
                    <p>
                        Created to <span>help</span> potential <span>customers</span> learn
                        about Medicare, how Meghan can help them, and how to contact her.
                    </p>
                </div>
            </div>
        </div>
    );
};
