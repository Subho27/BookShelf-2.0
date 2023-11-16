import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'F:\\BookShelf\\bookshelf\\src\\css\\search-bar.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="flex-container search-bar-div">
            <div>
                <div className="logo-banner-div">
                    <Link to='/'>
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\logo-color.png")} alt="BookShelf_logo" width="50" height="50" id="logo" />
                    </Link>
                    <Link to='/'>
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\logo-name.png")} alt="BookShelf" id="logo-name"  width="50" height="50" />
                    </Link>
                </div>
            </div>
            <div>

                <div className="search-form">
                    <input type="search" id="form"/>
                    <button type="button" className="search-button">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\search-icon.png")} alt="search" id="search-icon" height="20" width="20" />
                    </button>
                </div>
            </div>
            <div>
                <div className="utility-class">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\tracking-icon.png")} alt="search" height="25" width="25" />
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\favorite-icon.png")} alt="search" height="25" width="25" />
                    <Link to="/cart"><img src={require("F:\\BookShelf\\bookshelf\\src\\images\\cart-icon.png")} alt="search" height="25" width="25" /></Link>
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\help-icon.png")} alt="search" height="25" width="25" />
                    <Link to="/profile"><img src={require("F:\\BookShelf\\bookshelf\\src\\images\\user-icon.png")} alt="search" height="25" width="25" /></Link>
                </div>
            </div>
        </div>
    );
  }
}

export default SearchBar;