import React, { Component } from 'react';
import TopBanner from './topBanner';
import SearchBar from './searchBar';
import MenuDropdown from './menuDropdown';
import Footer from './footer';
import ProductListing from './productListing';

class Home extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <ProductListing/>
            <Footer/>
        </div>
    );
  }
}

export default Home;