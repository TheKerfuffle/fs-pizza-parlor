import './Checkout.css';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useState} from 'react';

function Checkout() {

  function getTotal () {
    return total;
  }
  
  const checkoutListData = useSelector(store => store.cart);
  const checkoutCustomerData = useSelector(store => store.customers);
  const total = useSelector(store => store.totalPrice);
  
  const [order, setOrder] = useState({});

  const handleCheckout = () => {
    console.log('click');
    setOrder({
      customer_name: checkoutCustomerData.customer_name,
      street_address: checkoutCustomerData.street_address,
      city: checkoutCustomerData.city,
      zip: checkoutCustomerData.zip,
      type: checkoutCustomerData.type,
      total:total
    })
    axios({
      method: 'POST',
      url: '/api/orders', 
      data: order
    })
    .then(response =>  {
      console.log('added an order to the server', response);
    })
    .catch(error => {
      console.log('Unable to add order', error);
      alert('Unable to add order');
    })

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
          <div className="total">
            {total}
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div> 
    </>
  );
}

export default Checkout;
