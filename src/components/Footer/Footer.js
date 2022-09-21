import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import useCollapse from "react-collapsed";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";

function Footer() {
  // const config = {
  //     duration: 500,
  // };
  // const { getCollapseProps, getToggleProps } = useCollapse(config);

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="newsletter relative">
          <div className="img gatsby-image-wrapper">
            <img src="../images/newsletter.jpg" alt="Newsletter" />
          </div>
          <div className="newsletter-content absolute bottom-100 left-100 z-9 w-[730px] mdscreen:w-90-per smscreen2:w-full mdscreen:left-0 mdscreen:px-20 laptop:left-70 laptop:bottom-70 lgscreen:left-30 lgscreen:bottom-30">
            <div className="title-white">
              <h4>Receive African inspiration in your inbox</h4>
            </div>
            <div className="content white">
              <p>Sunt in culpa qui officia deserunt sunt in mollit anim id est laborum.</p>
            </div>
            <div className="gform_wrapper">
              <form>
                <div className="gform_body">
                  <ul className="gform_fields form_sublabel_below description_below top">
                    <li id="field_1_2">
                      <input type="text" placeholder="Name and Surname" />
                    </li>
                    <li id="field_1_3">
                      <input type="text" placeholder="Email Address" />
                    </li>
                  </ul>
                </div>
                <div className="gform_footer top">
                  <button class="gravityform__button gform_button button" id="gform_submit_button_1" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-navbar bg-black-400 lg:py-120 py-60">
          <div className="container-fluid-xl">
            <div className="flex flex-wrap items-center">
              <div className="lg:w-2/12 w-full">
                <div className="footer-info">
                  <div className="logo">
                    <Link to="/">
                      <img src="../images/white-logo.png" className="max-w-[130px] m-auto" alt="Logo" />
                    </Link>
                  </div>
                  <div className="content white text-center pt-15">
                    <p><Link to="tel:+27 21 461 9001">T: +27 21 461 9001</Link></p>
                    <p><Link to="/mailto:info@tasafaris.com">E: info@tasafaris.com</Link></p>
                  </div>
                  <div className="sicon">
                    <ul className="flex flex-wrap justify-center mt-15 space-x-3">
                      <li><Link to="/"><img src="../images/instagram.png" alt="instagram" /></Link></li>
                      <li><Link to="/"><img src="../images/facebook.png" alt="facebook" /></Link></li>
                      <li><Link to="/"><img src="../images/youtube.png" alt="youtube" /></Link></li>
                      <li><Link to="/"><img src="../images/twitter.png" alt="twitter" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-10/12 w-full pl-80 lgscreen:pl-0 lgscreen:pt-50">
                <div className="flex flex-wrap mdscreen:gap-y-5 smscreen2:gap-8">
                  <div className="md:w-3/12 mdscreen:w-50-per smscreen2:w-full smscreen2:text-center w-full">
                    <div className="footer-navbar-menu">
                      <ul className="grid gap-y-3">
                        <h6><Link to="/">Trip Inspiration</Link></h6>
                        <h6><Link to="/">Experiences</Link></h6>
                        <h6><Link to="/">Travel Styles </Link></h6>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-3/12 mdscreen:w-50-per smscreen2:w-full smscreen2:text-center w-full">
                    <div className="footer-navbar-menu">
                      <h6>Destinations</h6>
                      <ul>
                        <li><Link to="/">Southern Africa</Link></li>
                        <li><Link to="/">Central Africa</Link></li>
                        <li><Link to="/">East Africa</Link></li>
                        <li><Link to="/">Indian Ocean Islands</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-3/12 mdscreen:w-50-per smscreen2:w-full smscreen2:text-center w-full">
                    <div className="footer-navbar-menu">
                      <h6>About Us</h6>
                      <ul>
                        <li><Link to="/">Why book with us</Link></li>
                        <li><Link to="/">Meet the Team</Link></li>
                        <li><Link to="/">Conservation & Community</Link></li>
                        <li><Link to="/">Natural Events</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-3/12 mdscreen:w-50-per smscreen2:w-full smscreen2:text-center w-full">
                    <div className="footer-navbar-menu">
                      <h6>Contact Us</h6>
                      <ul>
                        <li><Link to="/">Ambassadors Program</Link></li>
                        <li><Link to="/">FAQ’S</Link></li>
                        <li><Link to="/">Partners</Link></li>
                        <li><Link to="/">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logos bg-black-600 py-25">
          <ul className="flex flex-wrap justify-center items-center space-x-10">
            <li><img src="../images/atta.png" alt="atta" /></li>
            <li><img src="../images/tm.png" alt="atta" /></li>
            <li><img src="../images/Satsa.png" alt="Satsa" /></li>
          </ul>
        </div>

        <div className="copyright bg-black-400 lg:py-30 py-15">
          <div className="container-fluid-xl">
            <div className="flex flex-wrap justify-between items-center mdscreen:flex-col mdscreen:justify-center">
              <div className="content white">
                <p>All Rights Reserved  Timeless Africa Safaris. </p>
              </div>
              <ul className="flex flex-wrap">
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </React.Fragment>
  );
}

export default Footer;
