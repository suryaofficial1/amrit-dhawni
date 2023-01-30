import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

const Heading = ({ text }) => {
  return (
    <div className="heading-container">
      <h1 className="heading-text">{text}</h1>
      {/* <Link to="/allproducts">
            <button style={{
                border: '3px solid black',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                color: 'black',
                marginTop:'15px',
                padding: '10px 20px',
                cursor: 'pointer'
            }}>
                Shop Now
            </button>
        </Link> */}
    </div>
  );
};

export default Heading;
