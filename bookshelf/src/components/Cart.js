import React, { Component } from 'react';
import TopBanner from './topBanner';
import SearchBar from './searchBar';
import MenuDropdown from './menuDropdown';
import UserCart from './userCart';
import Footer from './footer';

class Cart extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <UserCart/>
            <Footer/>
        </div>
    );
  }
}

export default Cart;