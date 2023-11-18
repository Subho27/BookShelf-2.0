import React, { Component } from 'react';
import TopBanner from './helper-component/topBanner';
import SearchBar from './helper-component/searchBar';
import MenuDropdown from './helper-component/menuDropdown';
import SlideshowBody from './helper-component/slideshowBody';
import Footer from './helper-component/footer';

class Home extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <SlideshowBody/>
            <Footer/>
        </div>
    );
  }
}

export default Home;