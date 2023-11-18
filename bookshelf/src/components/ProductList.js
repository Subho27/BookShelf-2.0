import React, { Component } from 'react';
import TopBanner from './helper-component/topBanner';
import SearchBar from './helper-component/searchBar';
import MenuDropdown from './helper-component/menuDropdown';
import Footer from './helper-component/footer';
import ProductListing from './helper-component/productListing';
import withRouter from './helper-component/withRouter';

class ProductList extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <ProductListing id={this.props.params.id}></ProductListing>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(ProductList);