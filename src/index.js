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
    return state;
}

const cart = (state = [], action) => {
    if (action.type === 'SET_CART') {
        return action.payload;
    }
    else if (action.type === 'RESET_CART') {
        return [];
    }
    return state;
}

const totalPrice = (state = 0, action) => {
    if (action.type === 'SET_PRICE') {
        return Number(action.payload);
    }
    else if (action.type === 'RESET_PRICE') {
        return 0;
    }
    return state;
}

const customers = (state = [], action) => {
    console.log('hello from the customers reducer');
    if (action.type === `ADD_CUSTOMER`) {
        return action.payload;
    }
    return state;

}

const orderStore = (state = [], action) => {

    if (action.type === `SET_ORDERS`) {
        return action.payload;
    }

    return state;

}

const storeInstance = createStore(
    // reducers go inside our store - these are specific to our app
    combineReducers({
        menuStore,
        cart,
        totalPrice,
        customers,
        orderStore
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
