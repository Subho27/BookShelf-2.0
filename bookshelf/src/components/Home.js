import React, { Component } from 'react';
import TopBanner from './topBanner';
import SearchBar from './searchBar';
import MenuDropdown from './menuDropdown';
import SlideshowBody from './slideshowBody';
import Footer from './footer';

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