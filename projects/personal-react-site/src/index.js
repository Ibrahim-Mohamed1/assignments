import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import DaddyProvider from "./DaddyProvider"
import App from './App';

ReactDOM.render(
    <DaddyProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DaddyProvider>
    , document.getElementById('root'));