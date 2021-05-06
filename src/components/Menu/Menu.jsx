import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '../MenuItem/MenuItem'

function Menu() {

    let [currentCart, setCurrentCart] = useState([]);
    let [price, setPrice] = useState(0);

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

    function submitCart() {
        dispatch({type: 'SET_CART'})
    }



    const reduxStore = useSelector(store => store);

    return (
        <>
            <div className="Menu">
                <ul>
                    {reduxStore.menuStore.map((pizza) =>
                        <MenuItem pizza={pizza} 
                            currentCart={currentCart}
                            setCurrentCart={setCurrentCart}
                            price={price}
                            setPrice={setPrice} />
                    )}
                </ul>
                <p>Total Price: {reduxStore.totalPrice}</p>
                <button onClick={submitCart}> NEXT </button>
            </div>
        </>
    )
}

export default Menu;