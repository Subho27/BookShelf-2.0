import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\slideshow-body.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';
// import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\js\\dist\\carousel.js'
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\js\\src\\carousel.js'

class SlideshowBody extends Component {
  render() {
    return (
        <div class="slideshow-body">
            <div id="carouselExampleIndicators" class="carousel slide slideshow">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\first.jpg")} alt="first" class="slideshow-image"/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\second.jpg")} alt="second" class="slideshow-image" />
                    </div>
                    <div class="carousel-item">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\third.jpg")} alt="third" class="slideshow-image" />
                    </div>
                    <div class="carousel-item">
                    <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\fourth.jpg")} alt="fourth" class="slideshow-image" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <hr width="95%" className="hor-line" />
        
            <div class="stores-class">
                <div class="stores-heading">
                    <span><h3>Visit our stores</h3></span>
                </div>
                <hr width="20%" className="hor-line" />
                <section>
                    <div class="cards-wrapper">
                    <div class="card">
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\first.jpg")} alt="" />
                        <div class="centered">Kolkata Stores</div>
                    </div>
                    <div class="card">
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\second.jpg")} alt="" />
                        <div class="centered">Delhi Stores</div>
                    </div>
                    <div class="card">
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\third.jpg")} alt="" />
                        <div class="centered">Mumbai Stores</div>
                    </div>
                    <div class="card">
                        <img src={require("F:\\BookShelf\\bookshelf\\src\\images\\slideshow\\fourth.jpg")} alt="" />
                        <div class="centered">Chennai Stores</div>
                    </div>
                    </div>
                </section>
            </div>

            <hr width="95%" className="hor-line" />

            <div class="shelf-class">
                <div class="stores-heading">
                    <span><h3>Explore the shelf</h3></span>
                </div>
                <hr width="20%" className="hor-line" />
                <div class="flex-container">
                    <div>
                        <ul className="heading"><h5>Explore Science-Fiction Shelf</h5></ul>
                        <ul>Dune By Frank Herbert</ul>
                        <ul>The Martian By Andy wier</ul>
                        <ul>Foundation By Isaac Asimov</ul>
                    </div>
                    <div>
                        <ul className="heading"><h5>Explore History Shelf</h5></ul>
                        <ul>Orientalism by Edward Said</ul>
                        <ul>Salt By Mark Kurlansky</ul>
                        <ul>An Era of Darkness By Shashi Tharoor</ul>
                    </div>
                    <div>
                        <ul className="heading"><h5>Explore Thriller Shelf</h5></ul>
                        <ul>Gone Girl By Gillian Flynn</ul>
                        <ul>Dark Matter By Blake Crouch</ul>
                        <ul>Verity By Colleen Hoover</ul>
                    </div>
                    <div>
                        <ul className="heading"><h5>Explore Biography Shelf</h5></ul>
                        <ul>Wings of Fire By A.P.J Abdul Kalam</ul>
                        <ul>Night By Elie Wiesel</ul>
                        <ul>Baburnama By Babur</ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default SlideshowBody;