import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Menu from '../Menu/Menu';

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
          </ul>
        </nav>
        <Route path="/" exact>
          <Menu />
        </Route>
      </Router>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    </div>
  );
}

export default App;
