import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const appllication = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(appllication, document.getElementById('root'));
registerServiceWorker();
