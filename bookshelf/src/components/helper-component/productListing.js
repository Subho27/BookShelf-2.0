import React, { Component } from 'react';
import './../../css/product-listing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import BookJSON from './../../resources/books.json';
import { LOGO_ADD_TO_CART } from '../../resources/path';
import withRouter from './withRouter';

class ProductListing extends Component {

    render() {
        var books = BookJSON.books;
        var categoryBook =  this.props.params.id;
        const categoryString = categoryBook.replace(/-/g, "");
        const scifi_books = [];
        for(var index=0; index<books.length; index++) {
            if(books[index].category === categoryBook){
                scifi_books.push(books[index]);
            }
        }
        return (
            <div>
                <div class="stores-heading">
                    <span class="center" ><h3>{ categoryString } Shelf</h3></span>
                </div>
                <hr width="20%"/>
                <div class="products">
                    {scifi_books.map((item, i) => (
                        <Link to={"/product-detail/" + item.bookid }>
                        <div class="card product-card">
                            <div class="list-image-div">    
                                <img src={require(`./../../images/books/${item['image-path']}`)} alt="book" class="list-image"/>
                                <div class="list-add-to-cart">
                                    <Link to="/cart" ><img src={require(`./../../images/${LOGO_ADD_TO_CART}`)} alt="add to cart" class="circle"/></Link>
                                </div>
                            </div>
                            <div class="card-details">
                                <h4><b>{item.name}</b></h4>
                                <p>By {item.author}</p>
                                {[...Array(5)].map((x, i) => (
                                    <span className={(i<item.rating)?"fa fa-star checked rating-class":"fa fa-star rating-class"}></span>
                                ))}
                                <p>$ {item.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ProductListing);