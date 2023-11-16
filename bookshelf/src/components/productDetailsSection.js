import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\product-details-section.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';

class ProductDetailsSection extends Component {
  render() {
    return (
        <div class="stores-heading-div">
            <div class="stores-heading">
                <span><h3>The Martian</h3>By Andy Weir</span>
            </div>
            <hr width="20%"/>
            
            <div class="flex-container details-div">
                <div>
                    <img src="images\books\book10.jpg" alt="search" height="500" width="350"/><br/>
                    <div class="button-group">
                        <a href="cart.html"><button class="button-edit">Add to cart</button></a>
                        <a href="\"><button class="button-edit">Buy now</button></a>
                    </div>
                </div>
                <div class="description-div">
                    <p class="price-div">$ 99.00</p>
                    <p><span class="original-price-div">$ 299.00</span><span class="discount-span">&nbsp;&nbsp;&nbsp;&nbsp;67% off</span></p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star">&nbsp;&nbsp;&nbsp;&nbsp;792 Ratings & 107 Reviews</span><br/>
                    <h5 class="product-details-h5">Product Details</h5>
                    <p class="product-details-p">The Martian is a 2011 science fiction debut novel written by Andy Weir. The book was originally self-published 
                        on Weir's blog, in a serialized format. In 2014, the book was re-released after Crown Publishing Group purchased 
                        the exclusive publishing rights. The story follows an American astronaut, Mark Watney, as he becomes stranded 
                        alone on Mars in 2035 and must improvise in order to survive. A film adaptation, The Martian, directed by 
                        Ridley Scott and starring Matt Damon, was released in October 2015.</p>
                    <p>No. of Pages : 384</p>
                    <p>Language : English</p>
                    <p>Binding : Paperback</p>
                    <p>Publisher : Cornerstone</p>
                </div>
            </div>
        </div>
    );
  }
}

export default ProductDetailsSection;