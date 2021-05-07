import './Checkout.css'
import {useSelector} from 'react-redux'
import {useState} from 'react';

function Checkout() {

  const [total, setTotal] = useState(0);
  
  const checkoutListData = useSelector(store => store.cart);
  const checkoutCustomerData = useSelector(store => store.customers);

  return (
    <>
      <div className="checkoutCustomer">
        <div className="checkoutCustomer">
      <h2>Step 3: Checkout</h2>
          <p>{checkoutCustomerData.name}</p>
          <p>{checkoutCustomerData.street_address}</p>
          <p>{checkoutCustomerData.city + ', ' + checkoutCustomerData.state, checkoutCustomerData.zip}</p>
        </div>
        <div className="checkoutType">
          <h2>Type of order</h2>
        </div>
        <div className="checkoutList">
          <table>
            <thead>
              <th>
                <td>Name</td>
                <td>Cost</td>
              </th>
            </thead>
            <tbody>
              {checkoutListData.map(
              <tr key={checkoutListData.id}>
                <td>{checkoutListData.name}</td>
                <td>{checkoutListData.price}</td>
              </tr>
              )}
            </tbody>
          </table>
          <div className="total">
            {getTotal}
          </div>
        </div>
      </div> 
    </>
  );
}

export default Checkout;
