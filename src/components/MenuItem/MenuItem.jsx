import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MenuItem({ pizza, currentCart, setCurrentCart, price, setPrice }) {

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
        setCurrentCart(currentCart.push(pizza))
        setPrice(price+Number(pizza.price));
        changeToggle();
    }

    function removePizza() {

        setPrice(price-Number(pizza.price));
        changeToggle();
    }


    return (
        <>
            <div key={pizza.id}>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                {toggle ? (
                    <button onClick={addPizza}>Add</button>
                ) : (
                    <button onClick={changeToggle, removePizza}>Remove</button>
                )}


            </div>
        </>
    )
}

export default MenuItem;