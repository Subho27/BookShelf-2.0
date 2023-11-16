import React, { Component } from 'react';
import 'F:\\BookShelf\\bookshelf\\src\\css\\footer.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css';
import 'F:\\BookShelf\\bookshelf\\node_modules\\font-awesome\\css\\font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
        <footer class="text-center text-black">
            <div class="container p-4">
                <section class="mb-4">
                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-facebook"></i>
                </a>

                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-twitter"></i>
                </a>

                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-google"></i>
                </a>

                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-instagram"></i>
                </a>

                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-linkedin"></i>
                </a>

                <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <i class="fa fa-github"></i>
                </a>
                </section>

                <section class="">
                <form action="">
                    <div class="row d-flex justify-content-center">
                    <div class="col-auto">
                        <p class="pt-2">
                        <strong>Sign up for our newsletter</strong>
                        </p>
                    </div>

                    <div class="col-md-5 col-12">
                        <div class="form-outline form-black mb-4">
                        <input type="email" id="form5Example21" class="form-control" placeholder="Enter Email address..."/>
                        </div>
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-outline-dark mb-4">
                        Subscribe
                        </button>
                    </div>
                    </div>
                </form>
                </section>

                <section class="">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">The Company</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-black">About Us</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Blog</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Careers</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Team</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">More Information</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-black">Fees and Payment</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Shipping & Delivery</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Terms and Conditions</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Contact Us</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Explore More</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-black">Refer & Earn</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Gift Cards</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Visit Us</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Privacy Policy</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Others</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-black">Inside BS</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Press</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Video Shop</a>
                        </li>
                        <li>
                        <a href="#!" class="text-black">Assitant</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </section>
            </div>

            <div class="text-center p-3 copyright">
                © 2023 Copyright:
                BookShelf.com
            </div>
            </footer>
    );
  }
}

export default Footer;