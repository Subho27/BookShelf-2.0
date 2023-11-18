import React, { Component } from 'react';
import TopBanner from './helper-component/topBanner';
import SearchBar from './helper-component/searchBar';
import MenuDropdown from './helper-component/menuDropdown';
import UserCart from './helper-component/userCart';
import Footer from './helper-component/footer';

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