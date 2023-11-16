import React, { Component } from 'react';
// import 'F:\\BookShelf\\bookshelf\\src\\css\\top-banner.css';
// import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';
import './..\\css\\top-banner.css';
import 'bootstrap\\dist\\css\\bootstrap.min.css';
import { WELCOME_STRING } from './..\\resources\\strings.js';

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