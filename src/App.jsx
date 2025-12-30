import { Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './Intro';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';


const Animate = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
        {children}
    </motion.div>
);

const Title = () => {
    return (
        <>
            <div
                className='relative text-3xl min-[520px]:text-5xl text-nowrap w-fit max-[400px]:mx-auto'
                id='name'
            >
                <span
                    className='absolute -left-px -mt-px'
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
                    className='absolute left-[2px] mt-px'
                    style={{ color: '#00f', animationDelay: '-0.33s' }}
                >
                    Jason Morofsky
                </span>
            </div>
            <p className='font-thin text-lg text-nowrap w-fit max-[400px]:mx-auto'>Software Engineer</p>
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

                    {/* more stars are needed to cover screen sizes > 2000px wide */}
                    <div id='small-stars' className='absolute left-[2000px]' />
                    <div id='medium-stars' className='absolute left-[2000px]' />
                    <div id='large-stars' className='absolute left-[2000px]' />

                    <div className='m-6 min-[400px]:m-12'>
                        <Title />
                        <Navigation />
                    </div>
                </div>
            }

            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Intro />} />
                    <Route path='/home' element={<Animate><Home /></Animate>} />
                    <Route path='/about' element={<Animate><About /></Animate>} />
                    <Route path='/work' element={<Animate><Work /></Animate>} />
                    <Route path='/projects' element={<Animate><Projects /></Animate>} />
                    <Route path='/contact' element={<Animate><Contact /></Animate>} />
                </Routes>
            </AnimatePresence>
        </>
    );
};
