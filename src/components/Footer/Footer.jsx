import React from "react";
import "./Footer.scss";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          {/* <Link to='/products/1'><span>Women</span></Link>
          <Link to='/products/1'><span>Men</span></Link> */}
          <Link to='/products/1'><span>Shoes</span></Link>
          <Link to='/products/1'><span>Accessories</span></Link>
          <Link to='/products/1'><span>New arrivals</span></Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link to='/contact-us'><span>Contact Us</span></Link>
          <Link to='/about-us'><span>About Us</span></Link>
          <Link to='/terms-condition'><span>Terms & Condition</span></Link>
          <Link to='/privacy-policy'><span>Privacy Policy</span></Link>
          <Link to='/return-policy'><span>Return Policy</span></Link>
          <Link to='/shipping-info'><span>Shipping Information</span></Link>
          
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Amrit Dawani, an Indore-based fashion designer, specializes in couture for women’s and men’s wear. His design style can be described as a mix of contemporary silhouettes and finely detailed embroideries.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <ul className="contact-list">
            <li className="contact-item">
                <i className="fas fa-phone"></i> 
                <a href="tel:9644095272" className="contact-link">+91 75669 04500</a>
            </li>
            <li className="contact-item">
                <i className="fas fa-envelope"></i> 
                <a href="mailto:contact@amritdawani.com" className="contact-link">contact@amritdawani.com</a>
            </li>
            <li className="contact-item">
                <i className="fas fa-map-marker-alt"></i> 
                <a>  19/1, New Palasia, Indore (M.P.)</a>   
            </li>
        </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Link to='/' ><span className="logo">Amrit Dawani</span></Link>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
