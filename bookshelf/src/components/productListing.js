import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\product-listing.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';
import { Link } from 'react-router-dom';

class ProductListing extends Component {
  render() {
    return (
        <div>
            <div class="stores-heading">
                <span><h3>Science Fiction Shelf</h3></span>
            </div>
            <hr width="20%"/>
            
            <div class="products">
                <Link to="/product-detail">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book1.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                            <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                        <h4><b>The War of the Worlds</b></h4> 
                        <p>By H. G. Wells</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 99.00</p>
                    </div>
                </div>
                </Link>
                <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book2.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Nineteen Eighty-Four</b></h4> 
                    <p>By George Orwell</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 199.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book3.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Contact</b></h4> 
                    <p>By Carl Sagan</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 99.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book4.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>The Sirens Of Titan</b></h4> 
                    <p>By Kurt Vonnegut Jr.</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 299.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book5.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Dune</b></h4> 
                    <p>By Frank Herbert</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 199.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book6.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Exhalation</b></h4> 
                    <p>By Ted Chiang</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 99.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book7.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Hyperion </b></h4> 
                    <p>By Dan Simmons</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 199.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book8.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Neuromancer</b></h4> 
                    <p>By William Gibson</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 299.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book9.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>Hail Mary</b></h4> 
                    <p>By Andy Weir</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 99.00</p>
                    </div>
                </div>
            </a>
            <a href="product_details.html">
                <div class="card product-card">
                    <div class="list-image-div">    
                        <img src="images\books\book10.jpg" alt="Avatar" class="list-image"/>
                        <div class="list-add-to-cart">
                        <a href="cart.html" ><img src="images\add-to-cart-icon.png" alt="Avatar" class="circle"/></a>
                        </div>
                    </div>
                    <div class="card-details">
                    <h4><b>The Martian</b></h4> 
                    <p>By Andy Weir</p> 
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>$ 99.00</p>
                    </div>
                </div>
            </a>
            </div>
        </div>
    );
  }
}

export default ProductListing;