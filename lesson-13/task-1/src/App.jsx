import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Contacts from './Contacts'
import Products from './Products';
import Home from './Home';

const App = () => {
    return (
      <div className="page">
        <BrowserRouter>
          <Route to="/"><Home /></Route>
          <Route to="/products"><Products /></Route>
          <Route to="/contacts"><Contacts /></Route>
        </BrowserRouter>
      </div>
    );
}

export default App;

