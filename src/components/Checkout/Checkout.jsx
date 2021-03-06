import './Checkout.css'
import {useSelector} from 'react-redux'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Checkout() {

  const dispatch = useDispatch();
  const history = useHistory();

  const checkoutListData = useSelector(store => store.cart);
  const checkoutCustomerData = useSelector(store => store.customers);
  const total = useSelector(store => store.totalPrice);
  
  // const [order, setOrder] = useState({});

  const handleCheckout = () => {
    console.log('click');
    const order = {
      customer_name: checkoutCustomerData.customer_name,
      street_address: checkoutCustomerData.street_address,
      city: checkoutCustomerData.city,
      zip: checkoutCustomerData.zip,
      type: checkoutCustomerData.type,
      total: String(total),
      pizzas: checkoutListData
    }
    console.log(order);
    axios({
      method: 'POST',
      url: '/api/order', 
      data: order
    })
    .then(response =>  {
      console.log('added an order to the server', response);
    })
    .catch(error => {
      console.log('Unable to add order', error);
      alert('Unable to add order');
    })
    dispatch({type: 'RESET_CART'});
    dispatch({type: 'RESET_PRICE'});
    history.push('/');
  }

  return (
    <>
      <div className="checkoutCustomer">
        <div className="checkoutCustomer">
      <h2>Step 3: Checkout</h2>
          <p>{checkoutCustomerData.customer_name}<br />
          {checkoutCustomerData.street_address}<br />
          {checkoutCustomerData.city + ', MN ' + checkoutCustomerData.zip}</p>
        </div>
        <div className="checkoutType">
          <h2>{checkoutCustomerData.type}</h2>
        </div>
        <div className="checkoutList">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody>
              {checkoutListData.map( listData =>
              <tr key={listData.id}>
                <td>{listData.name}</td>
                <td>{listData.price}</td>
              </tr>
              )}
            </tbody>
          </table>
          <h3 className="total">
            Total: ${total}
          </h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div> 
    </>
  );
}

export default Checkout;
