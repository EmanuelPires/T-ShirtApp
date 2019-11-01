import React from 'react';

import './App.css';
import Landing from './pages/Landing';
import Tshirt from './pages/Tshirts';
import TLanding from './pages/Tshirts-Material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/tshirt' component={Tshirt} />
        <Route exact path='/checkout' component={CheckOut} />
      </div>
    </Router>
  );
}

export default App;
