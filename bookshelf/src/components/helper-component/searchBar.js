import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../css/search-bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LOGO_CART_PATH, LOGO_COLOR_PATH, LOGO_FAVORITE_PATH, LOGO_HELP_PATH, 
    LOGO_NAME_PATH, LOGO_SEARCH_PATH, LOGO_TRACKING_PATH, LOGO_USER_PATH } from '../../resources/path';

class SearchBar extends Component {
  render() {
    return (
        <div className="flex-container search-bar-div">
            <div>
                <div className="logo-banner-div">
                    <Link to='/'>
                        <img src={require(`./../../images/${LOGO_COLOR_PATH}`)} alt="bookShelf_logo" width="50" height="50" id="logo" />
                    </Link>
                    <Link to='/'>
                        <img src={require(`./../../images/${LOGO_NAME_PATH}`)} alt="bookShelf" id="logo-name"  width="50" height="50" />
                    </Link>
                </div>
            </div>
            <div>
                <div className="search-form">
                    <input type="search" id="form"/>
                    <button type="button" className="search-button">
                    <img src={require(`./../../images/${LOGO_SEARCH_PATH}`)} alt="search" id="search-icon" height="20" width="20" />
                    </button>
                </div>
            </div>
            <div>
                <div className="utility-class">
                    <img src={require(`./../../images/${LOGO_TRACKING_PATH}`)} alt="tracking" height="25" width="25" />
                    <img src={require(`./../../images/${LOGO_FAVORITE_PATH}`)} alt="favorite" height="25" width="25" />
                    <Link to="/cart"><img src={require(`./../../images/${LOGO_CART_PATH}`)} alt="cart" height="25" width="25" /></Link>
                    <img src={require(`./../../images/${LOGO_HELP_PATH}`)} alt="help" height="25" width="25" />
                    <Link to="/profile"><img src={require(`./../../images/${LOGO_USER_PATH}`)} alt="user" height="25" width="25" /></Link>
                </div>
            </div>
        </div>
    );
  }
}

export default SearchBar;