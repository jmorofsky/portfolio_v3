import { useLocation } from 'react-router';


export default function Stars() {
    const location = useLocation();

    return (
        <>
            {location.pathname != '/' &&
                <div className='absolute z-1 opacity-0 animate-fadeIn'>
                    <div id='small-stars' />
                    <div id='medium-stars' />
                    <div id='large-stars' />

                    {/* more stars are needed to cover screen sizes > 2000px wide */}
                    <div id='small-stars' className='absolute left-[2000px]' />
                    <div id='medium-stars' className='absolute left-[2000px]' />
                    <div id='large-stars' className='absolute left-[2000px]' />
                </div>
            }
        </>
    );
}
