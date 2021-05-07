import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Admin.css';



function Admin(props) {

    const dispatch = useDispatch();

    const reduxStore = useSelector(store => store);

    useEffect(() => {
        setOrders();
    }, []);

    function setOrders() {
        axios.get('/api/order')
            .then(response => {
                // send to reducer so that we can access it from anywhere
                dispatch({ type: 'SET_ORDERS', payload: response.data });
            })
            .catch(error => {
                console.log('Error in GET ORDERS', error);
                alert('Bad in GET ORDERS');
            })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {reduxStore.orderStore.map( (order) => 

                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    )}
                

                </tbody>
            </table>




        </>
    );
}

export default Admin;