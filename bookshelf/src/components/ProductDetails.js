import React, { Component } from 'react';
import TopBanner from './helper-component/topBanner';
import SearchBar from './helper-component/searchBar';
import MenuDropdown from './helper-component/menuDropdown';
import Footer from './helper-component/footer';
import ProductDetailsSection from './helper-component/productDetailsSection';
import withRouter from './helper-component/withRouter';

class ProductDetails extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <ProductDetailsSection bid={this.props.params.bid} ></ProductDetailsSection>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(ProductDetails);