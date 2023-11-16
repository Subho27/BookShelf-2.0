import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\user-profile.css'
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';

class UserProfile extends Component {
  render() {
    return (
        <div>
            <div class="stores-heading">
                <span><h3>My Account</h3></span>
            </div>
            <hr width="20%"/>
            <div class="table-div">
                <table class="table-class">
                    <tr>
                        <td>Name</td>
                        <td>Subhodip Rudra</td>
                    </tr>
                    <tr>
                        <td>Email-Id</td>
                        <td>Subhodip.Rudra@iiitb.ac.in</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>90******02</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>**********</td>
                    </tr>
                </table>
            </div>
            <div class="button-div">
                <button class="button-edit">EDIT</button>
            </div>
        </div>
    );
  }
}

export default UserProfile;