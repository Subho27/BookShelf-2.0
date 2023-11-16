import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\menu-dropdown.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\js\\dist\\dropdown.js'
import { Link } from 'react-router-dom';

class MenuDropdown extends Component {
  render() {
    return (
        <div>
            <hr width="95%" className="hor-line" />

            <div class="flex-container">
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            History
                        </button>
                        <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/product-list">Action</Link></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Horror
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Short Story
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Science Fiction
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Science
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Biography
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Drama
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Thriller
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropdown-class" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Education
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="product_list.html">Action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Another action</a></li>
                        <li><a class="dropdown-item" href="product_list.html">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr width="95%" className="hor-line" />

        </div>
    );
  }
}

export default MenuDropdown;