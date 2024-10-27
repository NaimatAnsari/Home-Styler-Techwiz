import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="ft mt-3 mt-md-0">
    <div className="container px-5 px-lg-0 pt-5">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
          <img src="../public/img/logo.png" height="55px" alt="Brand Logo" />
          <p className="mb-4 ps-0 company_details">
            Experience unmatched quality and lasting durability with our
            expertly crafted furniture...
          </p>
          <div className="contact-info">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/"><i className="fa fa-home me-3"></i> Aptech Metro Star Gate</NavLink>
              </li>
              <li>
                <NavLink to="/Contact"><i className="fa fa-phone me-3"></i>+9876543210</NavLink>
              </li>
              <li>
                <NavLink to="/Contact"><i className="fa fa-envelope me-3"></i>
                  info@HomeStyler.com</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
          <h5>Customer Support</h5>
          <ul className="link-widget p-0">
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
            <li><NavLink to="/About">Privacy Policy</NavLink></li>
            <li><NavLink to="/About">Terms & Conditions</NavLink></li>
            <li><NavLink to="/About">Product Returns</NavLink></li>
            <li><NavLink to="/Sidemap">Site Map</NavLink></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
          <h5>Quick Links</h5>
          <ul className="link-widget p-0">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/Gallary">Gallery</NavLink></li>
            <li><NavLink to="/Feedback">Feedback</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
           
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
          <h5>Newsletter</h5>
          <form action="" method="" className="ft-news">
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit"><i className="fas fa-arrow-right"></i></button>
          </form>
          <h5>Stay Connected</h5>
          <div className="col-sm-12 col-lg-12 col-md-12 col-12">
            <ul className="social-network d-flex align-items-center p-0">
              <li>
                <NavLink to="https://www.facebook.com" target="_blank" className="facebook"><i
                    className="fab fa-facebook-f"></i></NavLink>
              </li>
              <li className="twitter">
                <NavLink to="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></NavLink>
              </li>
              <li className="linkindin">
                <NavLink to="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></NavLink>
              </li>
              <li className="youtube">
                <NavLink to="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="container-fluid copyright-section pb-3 text-center">
      <p className="text-center">Copyright © HomeStyler. All Rights Reserved</p>
    </div>
  </footer>
    </>
  )
}

export default Footer