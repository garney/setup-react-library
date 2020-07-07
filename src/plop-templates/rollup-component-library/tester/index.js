import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './index.scss';
import '../build/index.css';
const init = () => {
    ReactDOM.render(
        <App />
        ,
        document.getElementById('root'));
};

init();

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
