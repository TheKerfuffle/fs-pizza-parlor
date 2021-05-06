import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const menuStore = (state = [], action) => {

    if (action.type === 'SET_MENU') {
        return action.payload;
    }
}

const storeInstance = createStore(
    // reducers go inside our store - these are specific to our app
    combineReducers({
        menuStore,

    }
    ),
    // Also, add our middleware for the logger
    applyMiddleware(
        logger
    )

);

ReactDOM.render(
<React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>, 
document.getElementById('root'));
