import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router';
import App from './App';
import './globals.css';
import logo from './assets/logo.png';
import Stars from './Stars';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Link
                to='/home'
                className='absolute top-10 md:top-17 -right-[5px] md:right-[10px] w-[40px] md:w-[50px] rotate-90'
                viewTransition
            >
                <img src={logo} />
            </Link>

            <div className='fixed inset-6 md:inset-12 border border-zinc-500 overflow-hidden'>
                <Stars />
                
                <div className='p-6 h-full'>
                    <App />
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
