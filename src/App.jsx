import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Intro from './Intro';
import Home from './Home';


export default function App() {
    const navigate = useNavigate();

    const [selectedContent, setSelectedContent] = useState(''); // home, about, work, projects, contact

    useEffect(() => {
        setTimeout(() => navigate('/home'), 5300);
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </>
    );
};
