import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='fixed inset-12 m-auto border border-zinc-500 overflow-hidden'>
            <App />
        </div>
    </React.StrictMode>
);
