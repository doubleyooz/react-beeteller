import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './I18n';
import { AuthProvider } from './context/AuthProvider';
import { LanguageProvider } from './context/LanguageProvider';
import Routes from './routes';
import './global.scss';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <LanguageProvider>
                <Routes />
            </LanguageProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
