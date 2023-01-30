import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from '../../images/amritlogo.png'


const FooterMobile = () => {
  return (
    <div>
    <div className="flex" style={{flexDirection:'row',justifyContent:'space-evenly',margin:30, borderTop:"solid 3px black", paddingTop:"20px" }}>
        <div className="flex">
          <h4 className="m-b-10">Categories</h4>
          <Link to='/products/1'><span>Men</span></Link>
          <Link to='/products/1'><span>Shoes</span></Link>
          <Link to='/products/1'><span>Women</span></Link>
          <Link to='/products/1'><span>Accessories</span></Link>
          <Link to='/products/1'><span>New arrivals</span></Link>
        </div>
        <div className="flex">
          <h4 className="m-b-10">Links</h4>
          <Link to='/about-us'><span>About Us</span></Link>
          <Link to='/contact-us'><span>Contact Us</span></Link>
          <Link to='/privacy-policy'><span>Privacy Policy</span></Link>
          <Link to='/return-policy'><span>Return Policy</span></Link>
          <Link to='/terms-condition'><span>Terms & Condition</span></Link>
          <Link to='/shipping-info'><span>Shipping Information</span></Link>
      
        </div>
    </div>
        {/* <div className="flex">
        <h4 className="m-b-10">About</h4>
          <span className="m-5">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex">
        <h4 className="m-b-10">Contact</h4>
          <span className="m-5">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div> */}
    
      <div className="flex">
          {/* <Link to='/' ><span className="logo">Amrit Dawani</span> </Link> */}
          <Link to="/">
            <div className='logo-container'> 
              <img className='linkk' src={Logo} alt='Logo' /> 
            </div>
          </Link>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved <br></br>
          </span>
          <span>
            Designed and Developed by <b>Webiz Solutions</b><br></br>
          </span>
      
          {/* <img style={{objectFit:'fill',overflow:'hidden'}} src="/img/payment.png" alt="" /> */}
      
 
      </div>
    
    </div>
  );
};

export default FooterMobile;
