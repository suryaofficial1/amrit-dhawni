import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from '../../images/amritlogo.png'
import "./NewFooter.css";
import whatsappIcon from '../../images/whatsappIcon.png'
const NewFooter = () => {
  return (
    <div className="footerr">
      <Link to="/">
            <div className="logo"> 
                <img src={Logo} alt="Logo" />  
            </div>
      </Link>
      <div className="footer-ites">
        <a target="_blank" href="https://instagram.com/amritdawani_menswear?igshid=YmMyMTA2M2Y=">Instagram <InstagramIcon /></a>
        {/* <a href="https://instagram.com">Instagram <img src={whatsappIcon} style={{width:"20%"}}/></a> */}
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100069901578192&mibextid=ZbWKwL">Facebook <FacebookIcon /></a>
      </div>
      
      <div className="footer-itemss">
        <Link to="/shipping-info">Shipping Information</Link>
        <Link to="/return-policy">Return Policy</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-condition">Terms & Condition</Link>
      </div>
      <div className="footer-itmss">
        Copyright © 2023 All Right Reserved.
      </div>
      <div className="footer-imss">
        Designed and Developed By <b>Webiz Solutions</b>
      </div>
    </div>
  );
};

export default NewFooter;