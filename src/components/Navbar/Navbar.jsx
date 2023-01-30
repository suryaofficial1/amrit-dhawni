import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import logo from '../../images/amritlogo.png'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const [searchModal, setSearchModal] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            {/* <img src="/img/en.png" alt="" /> */}
            {/* <KeyboardArrowDownIcon /> */}
          </div>
          {/* <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div> */}
          {/* <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>  */}
        </div>
        <div className="center">
          {/* <Link className ="link" to="/">LAMASTORE</Link> */}
          {/* <Link to="/"><img src={logo}></img></Link> */}
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/allproducts">Products</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/contact-us">Contact Us</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon onClick={() => setSearchModal(true)} />
            {/* <PersonOutlineOutlinedIcon/> */}
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      </div>
      {open && <Cart/>}

    </div>
  );
};

export default Navbar;
