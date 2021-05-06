import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '../MenuItem/MenuItem'

function Menu() {

    const dispatch = useDispatch();

    function setMenu() {
        axios.get('/api/pizza')
            .then(response => {
                // send to reducer
                dispatch({ type: 'SET_MENU', payload: response.data })
            })
            .catch(error => {
                console.log('Error in GET MENU', error);
                alert('Bad in GET MENU')
            })
    }

    useEffect(() => {
        setMenu();

    }, []);

    const menu = useSelector(store => store.menuStore);

    return (
        <>
            <div className="Menu">
                <ul>
                    {menu.map((pizza) =>
                        <MenuItem pizza={pizza} />
                    )}
                </ul>
            </div>
        </>
    )
}

export default Menu;