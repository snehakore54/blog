import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import Cart from './components/Cart';


const App = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/login" element={<Login />} />
      <Route path="/products" element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  </Router>
);

export default App;
