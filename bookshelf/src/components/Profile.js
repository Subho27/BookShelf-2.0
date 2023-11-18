import React, { Component } from 'react';
import TopBanner from './helper-component/topBanner';
import SearchBar from './helper-component/searchBar';
import MenuDropdown from './helper-component/menuDropdown';
import Footer from './helper-component/footer';
import UserProfile from './helper-component/userProfile';

class Profile extends Component {
  render() {
    return (
        <div>
            <TopBanner/>
            <SearchBar/>
            <MenuDropdown/>
            <UserProfile/>
            <Footer/>
        </div>
    );
  }
}

export default Profile;