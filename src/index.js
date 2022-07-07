/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <>
            <App></App>
                </>
        </BrowserRouter>

    </React.StrictMode>

);*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';


ReactDOM.render(
    <React.StrictMode>
        <Form/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
