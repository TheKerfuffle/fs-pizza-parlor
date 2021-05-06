import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Menu from '../Menu/Menu';
import Customer from '../Customer/Customer';

function App() {

  // const dispatch = useDispatch();

  // const fetchCustomer = () => {
  //   Axios.get('/customer')
  //     .then(response => {
  //       //send to reducer
  //       dispatch({type: 'SET_CUSTOMER', payload: response.data})
  //     })
  //     .catch(error => {
  //       alert(`Sorry. Things aren't working at the moment. Try again later`);
  //       console.log('error getting customer info', error);
  //     }) 
  // }

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>


      </header>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Menu</Link>
            </li>
            <li>
              <Link to='/customer'>Customer Information</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
          <Menu />
        </Route>
        <Route path="/customer" exact>
          <Customer />
        </Route>
      </Router>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    </div>
  );
}

export default App;
