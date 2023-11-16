import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\user-cart.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';

class UserCart extends Component {
  render() {
    return (
        <div>
            <div class="stores-heading">
                <span><h3>My Shelf</h3></span>
            </div>
            <hr width="20%"/>
            <div class="cart-table-div">
                <table class="cart-table">
                    <tr>
                        <td><p>Product Photo</p>
                        <hr width="20%"/></td>
                        <td><p>Product Details</p>
                        <hr width="20%"/></td>
                        <td><p>Price (Unit)</p>
                        <hr width="20%"/></td>
                        <td><p>Quantity</p>
                        <hr width="20%"/></td>
                        <td><p>Total</p>
                        <hr width="20%"/></td>
                    </tr>
                    <tr>
                        <td><img src="images\books\book10.jpg" alt="search" height="100" width="70"/></td>
                        <td>The Martian By By Andy Weir</td>
                        <td>$ 99.00</td>
                        <td>
                        <div class="number">
                            <span class="minus">-</span>
                            <input type="text" value="2"/>
                            <span class="plus">+</span>
                        </div>
                        </td>
                        <td>$ 198.00</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td><b>$ 198.00</b></td>
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