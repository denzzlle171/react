import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts'
import Products from './Products';
import Home from './Home';

const App = () => {
    return (
      <div className="page" >
        <Routes>
          <Route to="/" component={Home}/>
          <Route to="/products" component={Products}/>
          <Route to="/contacts" component={Contacts}/>
        </Routes>
      </div>
    );
}

export default App;

