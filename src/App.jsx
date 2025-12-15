import { Routes, Route, useLocation } from 'react-router';
import Intro from './Intro';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';


const Title = () => {
    return (
        <>
            <div className='text-5xl' id='name' >
                <span
                    className='absolute -left-px -mt-px ml-12'
                    style={{ color: '#f00' }}
                >
                    Jason Morofsky
                </span>
                <span
                    style={{ color: '#0f0', animationDelay: '-0.5s' }}
                >
                    Jason Morofsky
                </span>
                <span
                    className='absolute left-px mt-px ml-12'
                    style={{ color: '#00f', animationDelay: '-0.33s' }}
                >
                    Jason Morofsky
                </span>
            </div>
            <p className='font-thin text-lg'>Software Engineer</p>
        </>
    );
};

export default function App() {
    const location = useLocation();

    return (
        <>
            {location.pathname != '/' &&
                <div className='opacity-0 animate-fadeIn'>
                    <div id='small-stars' />
                    <div id='medium-stars' />
                    <div id='large-stars' />

                    <div className='m-12'>
                        <Title />
                        <Navigation />
                    </div>
                </div>
            }

            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
};
