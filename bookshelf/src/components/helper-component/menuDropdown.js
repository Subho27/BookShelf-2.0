import React, { Component } from 'react';
import './../../css/menu-dropdown.css';
import 'bootstrap/js/dist/dropdown.js'
import { Link } from 'react-router-dom';
import CategoriesJSON from './../../resources/categories.json';
import { MORE_STRING } from '../../resources/strings';

class MenuDropdown extends Component {
  render() {
    return (
        <div>
            <hr width="95%" className="hor-line" />
            <div class="flex-container">
                {CategoriesJSON.categories.map((item, i) => (
                    <div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {item.name}
                            </button>
                            <ul class="dropdown-menu">
                            <li><p class="dropdown-item">{item.example1}</p></li>
                            <li><p class="dropdown-item">{item.example2}</p></li>
                            <li><Link class="dropdown-item link-style" to={"/product-list/" + item.type}>{ MORE_STRING }</Link></li>
                            </ul>
                        </div>
                    </div>
                ))}
            <hr width="95%" className="hor-line" />
            </div>
        </div>
    );
  }
}

export default MenuDropdown;