import React, { Component } from 'react';
import './../../css/user-profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EDIT_STRING, EMAIL_ACTUAL_STRING, EMAIL_STRING, MOBILE_ACTUAL_STRING, MOBILE_STRING, MY_ACCOUNT_STRING, NAME_ACTUAL_STRING, NAME_STRING, PASSWORD_ACTUAL_STRING, PASSWORD_STRING } from '../../resources/strings';

class UserProfile extends Component {
  render() {
    return (
        <div>
            <div class="stores-heading">
                <span><h3>{ MY_ACCOUNT_STRING }</h3></span>
            </div>
            <hr width="20%"/>
            <div class="table-div">
                <table class="table-class">
                    <tr>
                        <td>{ NAME_STRING }</td>
                        <td>{ NAME_ACTUAL_STRING }</td>
                    </tr>
                    <tr>
                        <td>{ EMAIL_STRING }</td>
                        <td>{ EMAIL_ACTUAL_STRING }</td>
                    </tr>
                    <tr>
                        <td>{ MOBILE_STRING }</td>
                        <td>{ MOBILE_ACTUAL_STRING }</td>
                    </tr>
                    <tr>
                        <td>{ PASSWORD_STRING }</td>
                        <td>{ PASSWORD_ACTUAL_STRING }</td>
                    </tr>
                </table>
            </div>
            <div class="button-div">
                <button class="button-edit">{ EDIT_STRING }</button>
            </div>
        </div>
    );
  }
}

export default UserProfile;