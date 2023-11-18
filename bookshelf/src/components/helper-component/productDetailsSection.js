import React, { Component } from 'react';
import './../../css/product-details-section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookJSON from './../../resources/books.json';
import { ADD_TO_CART_STRING, BUY_NOW_STRING } from '../../resources/strings';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';

class ProductDetailsSection extends Component {
  render() {

    const bookid = this.props.params.bid;
    const books = BookJSON.books;
    const book = [];
    for(var index=0; index<books.length; index++) {
        if(books[index].bookid === bookid){
            book.push(books[index]);
            break;
        }
    }

    return (
        <div>
        {book.map((item, i) => (
            <div class="stores-heading-div"> 
                <div class="stores-heading center">
                    <span><h3>{ item.name }</h3>By { item.author }</span>
                </div>
                <hr width="20%"/>
                
                <div class="flex-container details-div">
                    <div>
                        <img src={require(`./../../images/books/${item['image-path']}`)} alt="book" height="500" width="350"/><br/>
                        <div class="button-group">
                            <Link to="/cart"><button class="button-edit">{ ADD_TO_CART_STRING }</button></Link>
                            <Link to="/"><button class="button-edit">{ BUY_NOW_STRING }</button></Link>
                        </div>
                    </div>
                    <div class="description-div">
                        <p class="price-div">$ { item.price }</p>
                        <p><span class="original-price-div">$ { item['original-price'] }</span><span class="discount-span">&nbsp;&nbsp;&nbsp;&nbsp;{ item.discount }% off</span></p>
                        {[...Array(5)].map((x, i) => (
                            <span className={(i<item.rating)?"fa fa-star checked rating-class":"fa fa-star rating-class"}></span>
                        ))}
                        <span>{ item['num-ratings'] } Ratings & { item['num-reviews'] } Reviews</span><br/>
                        <h5 class="product-details-h5">Product Details</h5>
                        <p class="product-details-p">{ item.description }</p>
                        <p>No. of Pages : { item.pages }</p>
                        <p>Language : {item.language }</p>
                        <p>Binding : { item.Binding }</p>
                        <p>Publisher : { item.Publisher }</p>
                    </div>
                </div>
            </div>           
        ))}
        </div>
    );
  }
}

export default withRouter(ProductDetailsSection);