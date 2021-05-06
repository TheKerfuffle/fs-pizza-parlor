import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

function Menu() {

    let [currentCart, setCurrentCart] = useState([]);
    let [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    function setMenu() {
        axios.get('/api/pizza')
            .then(response => {
                // send to reducer so that we can access it from anywhere
                dispatch({ type: 'SET_MENU', payload: response.data })
            })
            .catch(error => {
                console.log('Error in GET MENU', error);
                alert('Bad in GET MENU');
            })
    }

    useEffect(() => {
        setMenu();
    }, []);

    function submitCart() {
        dispatch({ type: 'SET_CART', payload: currentCart });
        dispatch({ type: 'SET_PRICE', payload: price });
        history.push('/customer');
    }



    const reduxStore = useSelector(store => store);

    return (
        <>
            <h3>Total Price: {(Math.round(100 * Number(price))) / 100}</h3>
            <button onClick={submitCart}> NEXT </button>
            
            <div className="menu">

                {reduxStore.menuStore.map((pizza) =>
                    <MenuItem key={pizza.id}
                        pizza={pizza}
                        currentCart={currentCart}
                        setCurrentCart={setCurrentCart}
                        price={price}
                        setPrice={setPrice} />
                )}


            </div>
        </>
    )
}

export default Menu;