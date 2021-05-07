import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Menu from '../Menu/Menu';
import Customer from '../Customer/Customer';
import Checkout from '../Checkout/Checkout'
import StrongAnonymousDumboOctopus from '../StrongAnonymousDumboOctopus/StrongAnonymousDumboOctopus';

function App() {


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
          <Route path="/checkout" component={Checkout}/>
          <Route path="/strong-anonymous-dumbo-octopus" component={StrongAnonymousDumboOctopus} />
      </Router>

    </div>
  );
}

export default App;
