import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';

import './MenuItem.css';

function MenuItem({ pizza, currentCart, setCurrentCart, price, setPrice }) {

pizza.quantity = 1;

    let [toggle, setToggle] = useState(true);

    const dispatch = useDispatch();

    function changeToggle() {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    // dispatch({type: 'ADD_PRICE', payload: pizza.price});
    // dispatch({type: 'ADD_PIZZA', payload: pizza});

    function addPizza() {
        setCurrentCart([...currentCart, pizza])
        setPrice((Math.round(100 * Number(price)))/100 + (Math.round(100 * Number(pizza.price)))/100 );

        changeToggle();
        console.log(currentCart);
    }

    function removePizza() {
        // make a new array to manipulate
        let newCart = currentCart;


        // We know this pizza is in there because
        // of conditional rendering 
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === pizza.id) {
                newCart.splice(newCart[i], 1);
            }
        }

        // Set the cart to be this modified cart
        setCurrentCart(newCart);

        // Edit the current Total Price of the items in our cart
        setPrice((Math.round(100 * Number(price)))/100 - (Math.round(100 * Number(pizza.price)))/100 );
        changeToggle();



    }


    return (
        <>
            <div className='card'>
                <h3>{pizza.name}</h3>
                <h4>{pizza.price}</h4>
                <h6>{pizza.description}</h6>
                {toggle ? (
                    <button onClick={addPizza}>Add</button>
                ) : (
                    <button onClick={removePizza}>Remove</button>
                )}


            </div>
        </>
    )
}

export default MenuItem;