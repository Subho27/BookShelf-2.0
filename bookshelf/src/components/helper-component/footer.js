import React, { Component } from 'react';
import './../../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { ABOUT_STRING, ASSISTANT_STRING, BLOG_STRING, CAREER_STRING, 
    COMPANY_STRING, CONTACT_STRING, COPYRIGHT_STRING, EXPORT_STRING, 
    EXP_STRING, FEE_STRING, GIFT_STRING, MORE_INFO_STRING, OTHERS_STRING, 
    PRESS_STRING, PRIVACY_STRING, REFER_STRING, SHIPPING_STRING, 
    TEAM_STRING, TERMS_STRING, VIDEO_STRING, VIS_STRING } from '../../resources/strings';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <footer class="text-center text-black">
            <div class="container p-4">
                <section class="mb-4">
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-facebook"></i></Link>
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-twitter"></i></Link>
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-google"></i></Link>
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-instagram"></i></Link>
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-linkedin"></i></Link>
                    <Link class="btn btn-outline-dark btn-floating m-1" to="/" role="button"><i class="fa fa-github"></i></Link>
                </section>

                <section class="">
                {/* <form action="">
                    <div class="row d-flex justify-content-center">
                    <div class="col-auto">
                        <p class="pt-2">
                        <strong>{SIGNUP_STRING}</strong>
                        </p>
                    </div>

                    <div class="col-md-5 col-12">
                        <div class="form-outline form-white mb-4">
                        <input type="email" id="form5Example21" class="form-control email-from" height="100px" placeholder="Enter Email address..."/>
                        </div>
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-outline-dark mb-4">
                        { SUBSCRIBE_STRING }
                        </button>
                    </div>
                    </div>
                </form> */}
                </section>

                <section class="">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{ COMPANY_STRING }</h5>
                    <ul class="list-unstyled mb-0">
                        <li><Link href="/" class="text-black">{ ABOUT_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ BLOG_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ CAREER_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ TEAM_STRING }</Link></li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{ MORE_INFO_STRING }</h5>
                    <ul class="list-unstyled mb-0">
                        <li><Link href="/" class="text-black">{ FEE_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ SHIPPING_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ TERMS_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ CONTACT_STRING }</Link></li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{ EXP_STRING }</h5>

                    <ul class="list-unstyled mb-0">
                        <li><Link href="/" class="text-black">{ REFER_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ GIFT_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ VIS_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ PRIVACY_STRING }</Link></li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">{ OTHERS_STRING }</h5>

                    <ul class="list-unstyled mb-0">
                        <li><Link href="/" class="text-black">{ EXPORT_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ PRESS_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ VIDEO_STRING }</Link></li>
                        <li><Link href="/" class="text-black">{ ASSISTANT_STRING }</Link></li>
                    </ul>
                    </div>
                </div>
                </section>
            </div>

            <div class="text-center p-3 copyright">
                { COPYRIGHT_STRING }
            </div>
        </footer>
    );
  }
}

export default Footer;