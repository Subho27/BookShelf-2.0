import React, { Component } from 'react';
import './../../css/user-cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MY_CART_STRING, PRICE_STRING, PRODUCT_DETAILS_STRING, PRODUCT_PHOTO_STRING, 
    QUANTITY_STRING, TOTAL_STRING } from '../../resources/strings';
import CartJSON from './../../resources/cart-data.json';


class UserCart extends Component {

    constructor(props) {
        super(props);
        this.state = {

            price : 0
        }
        var cartItems = CartJSON.cart;
        var total = 0;
        cartItems.forEach(element => {
            total = total + element.price * element.quantity;
        });
        this.state.price = total;
    }

    calculatePrice = (event) => {
        var quantity = document.getElementsByClassName("quantity-for-calculation");
        var price = document.getElementsByClassName("price-for-calculation");
        var newTotal = 0;
        for(var i=0; i<quantity.length; i++){
            newTotal = newTotal + quantity[i].value * price[i].value;
        }
        this.setState({
            price : newTotal
        })
    };

    increment = (index) => {
        CartJSON.cart.map((item, i) => (
            item.quantity = (i === index) ? item.quantity+1 : item.quantity
        ))
        const FileSystem = require("fs");
        FileSystem.writeFile('./../../resources/cart-data.json', JSON.stringify(CartJSON), (error) => {
            if (error) throw error;
        });
        this.render();
    };

    decrement = (index) => {
        CartJSON.cart.map((item, i) => (
            item.quantity = ((i === index) ? item.quantity-1 : item.quantity)
        ))
        var ritem = (CartJSON.cart[index].quantity === 0) ? index : -1
        if(ritem !== -1) {
            CartJSON.cart.remove(index)
        }
        const FileSystem = require("fs");
        FileSystem.writeFile('./../../resources/cart-data.json', JSON.stringify(CartJSON), (error) => {
            if (error) throw error;
        });
        this.render();
    };

    render() {
    return (
        <div>
            <div class="stores-heading center">
                <span><h3>{ MY_CART_STRING }</h3></span>
            </div>
            <hr width="20%"/>
            <div class="cart-table-div">
                <table class="cart-table">
                    <tr>
                        <td><p>{ PRODUCT_PHOTO_STRING }</p>
                        <hr width="20%"/></td>
                        <td><p>{ PRODUCT_DETAILS_STRING }</p>
                        <hr width="20%"/></td>
                        <td><p>{ PRICE_STRING }</p>
                        <hr width="20%"/></td>
                        <td><p>{ QUANTITY_STRING }</p>
                        <hr width="20%"/></td>
                        <td><p>{ TOTAL_STRING }</p>
                        <hr width="20%"/></td>
                    </tr>
                    {CartJSON.cart.map((item, i) => (
                        <tr>
                            <td><img src={require(`./../../images/books/${item['image-path']}`)} alt="product" height="100" width="70"/></td>
                            <td>{ item.name } By { item.author }</td>
                            <td>$ <span class="price-for-calculation" >{ item.price }</span></td>
                            <td>
                            <div class="number">
                                <span class="minus" onClick={() => this.decrement(i)}>-</span>
                                <input type="text" defaultValue={ item.quantity } class="quantity-for-calculation"  onChange={() => this.calculatePrice()} readOnly/>
                                <span class="plus" onClick={() => this.increment(i)}>+</span>
                            </div>
                            </td>
                            <td>$ { (item.price*item.quantity).toFixed(2) }</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td><b id="updated-price" >$ {this.state.price.toFixed(2)}</b></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="td-button">
                        <button class="button-edit">Checkout & Pay</button>
                    </td>
                </tr>
                </table>
            </div>
        </div>
    );
  }
}

export default UserCart;