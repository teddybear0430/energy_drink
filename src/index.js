import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>, 
    document.getElementById('root')
);