import React, { Component } from 'react';
import './../../css/slideshow-body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/carousel.js'
import SlidesJSON from './../../resources/slides.json';
import { BOOK_ARRAY, CATEGORY_ARRAY, EXPLORE_STRING,  
    NEXT_STRING, PREVIOUS_STRING, TOUR_STRING, VISIT_STRING } from '../../resources/strings';

class SlideshowBody extends Component {
  render() {
    return (
        <div class="slideshow-body">
            <div class="stores-heading">
                <span class="center"><h3>{ TOUR_STRING }</h3></span>
            </div>
            <hr width="20%" className="hor-line" />
            <div id="carouselExampleIndicators" class="carousel slide slideshow">
                <div class="carousel-indicators">
                    {SlidesJSON.slides.map((item, i) => (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} class={(i===0)?"active":""} aria-current={(i===0)?"true":""} aria-label={"Slides " + (i+1)}></button>
                    ))}
                </div>
                <div class="carousel-inner">
                    {SlidesJSON.slides.map((item, i) => (
                        <div class={"carousel-item " + ((i===0)?"active":"")}>
                        <img src={require(`./../../images/${item['image-path']}`)} alt={item['alt-text']} class="slideshow-image"/>
                        </div>
                    ))}
                </div>
                <button class="carousel-control-prev button-left" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">{ PREVIOUS_STRING }</span>
                </button>
                <button class="carousel-control-next button-right" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">{ NEXT_STRING }</span>
                </button>
            </div>

            <hr width="95%" className="hor-line" />
        
            <div class="stores-class">
                <div class="stores-heading">
                    <span><h3>{ VISIT_STRING }</h3></span>
                </div>
                <hr width="20%" className="hor-line" />
                <section>
                    <div class="cards-wrapper">
                        {SlidesJSON.slides.map((item, i) => (
                            <div class="card">
                                <img src={require(`./../../images/${item['image-path']}`)} alt={item['alt-text']} />
                                <div class="centered">{item.location}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <hr width="95%" className="hor-line" />

            <div class="shelf-class">
                <div class="stores-heading">
                    <span><h3>{ EXPLORE_STRING }</h3></span>
                </div>
                <hr width="20%" className="hor-line" />
                <div class="flex-container explore-div">
                    {CATEGORY_ARRAY.map((cat, i) => (
                        <div>
                        <ul className="heading"><h5>{cat}</h5></ul>
                        {BOOK_ARRAY[i].map((book, j) => (
                            <ul>{book}</ul>
                        ))}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
}

export default SlideshowBody;