import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router';
import App from './App';
import './globals.css';
import logo from './assets/logo.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Link to='/home' className='absolute top-17 right-[10px] w-[50px] rotate-90'>
                <img src={logo} />
            </Link>

            <div className='fixed inset-12 m-auto border border-zinc-500 overflow-hidden'>
                <App />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
