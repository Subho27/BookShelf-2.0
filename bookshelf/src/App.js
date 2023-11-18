import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="product-list/:id" element={ <ProductList/> } />
        <Route path='product-detail/:bid' element={ <ProductDetails/>} />
        <Route path='cart' element={ <Cart/>} />
        <Route path='profile' element={ <Profile/>} />
      </Routes>
    );
  }
}

export default App;
