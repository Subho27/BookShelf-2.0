import React, { Component } from 'react';
import './../../css/top-banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WELCOME_STRING } from '../../resources/strings.js';

class TopBanner extends Component {
  render() {
    return (
        <div>
            <div id="top-banner" class="banner-class">
                <div class="top-banner-div">
                    <span id="top-banner-text" class="center"> { WELCOME_STRING } </span>
                </div>
            </div>
        </div>
    );
  }
}

export default TopBanner;