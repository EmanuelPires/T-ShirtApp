import React from 'react';

import './App.css';

import Tshirt from './pages/Tshirts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Tshirt} />
      </div>
    </Router>
  );
}

export default App;
