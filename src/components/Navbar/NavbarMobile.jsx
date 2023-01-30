import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../images/menu.svg'
import './Navbar.scss'
import Logo from '../../images/amritlogo.png'
import { Grid, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import InfoIcon from '@material-ui/icons/Info';



const NavbarMobile = () => {
  const [open,setOpen] = useState(false)
  const [searchModal, setSearchModal] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const HomePageHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const allProductsHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const contactPageHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const aboutUsHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const handleCard = () => {
    setOpen(!open)
  }

  return (
    <nav className="navbar-mobile">
      <div className="navbar-container">
        {/* <Link className ="linkk" to="/">Amrit Dawani</Link> */}
        <Link to="/">
          <div className='logo-container'> 
            <img className='linkk' src={Logo} alt='Logo' /> 
          </div>
        </Link>
        <div style={{display:"flex",padding:20}}>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className="cartIcon" onClick={() => handleCard()}>
          <ShoppingCartOutlinedIcon />
          <span>{products.length}</span>
        </div>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul class='menuGroup'>
          <Link onClick={HomePageHandle} className="link" to="/">
            <li class='menuitem'><HomeIcon /> Home</li>
            </Link>
            <Link onClick={allProductsHandle} className="link" to="/allproducts">
            <li class='menuitem'><SubjectIcon />Products</li>
            </Link>
            <Link onClick={contactPageHandle} className="link" to="/contact-us">
            <li class='menuitem'> <EmailIcon />Contact us</li>
            </Link>
            <Link onClick={aboutUsHandle} className="link" to="/about-us">
            <li class='menuitem'><InfoIcon />About Us</li>
            </Link>
          </ul>
        </div>
        {open && <Cart close={handleCard}/>}
      </div>
    </nav>
  )
}

export default NavbarMobile