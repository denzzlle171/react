import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts'
import Products from './Products';
import Home from './Home';

const App = () => {
    return (
      <div className="page">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    );
}

export default App;

