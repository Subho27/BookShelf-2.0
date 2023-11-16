import React, { Component } from 'react';
import TopBanner from './topBanner';
import SearchBar from './searchBar';
import MenuDropdown from './menuDropdown';
import Footer from './footer';
import UserProfile from './userProfile';

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