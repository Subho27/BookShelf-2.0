import React, { Component } from 'react';
import TopBanner from './topBanner';
import SearchBar from './searchBar';
import MenuDropdown from './menuDropdown';
import Footer from './footer';
import ProductDetailsSection from './productDetailsSection';

class ProductDetails extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <ProductDetailsSection/>
            <Footer/>
        </div>
    );
  }
}

export default ProductDetails;