import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducers from './reducers/index';

// let store = createStore(rootReducers);

ReactDOM.render(
        <App/>,
    document.getElementById('root')
);
