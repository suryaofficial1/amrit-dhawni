import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const icons = ()=>(
    <div className="icons">
    <FacebookIcon />
    <InstagramIcon />
    <TwitterIcon />
    <GoogleIcon />
    <PinterestIcon />
  </div>
  )
  return (
    
    <div className="contact" >

      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
      
        {isTabletOrMobile?(null):icons()}
        
      </div>
      
      {!isTabletOrMobile?(null):icons()}
    </div>
 
  );
};

export default Contact;
