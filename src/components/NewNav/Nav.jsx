import React, {useState} from 'react'
import css from './nav.module.css'
import Logo from '../../images/amritlogo.png'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

const Nav = () => {

    const [open,setOpen] = useState(false)
    const [searchModal, setSearchModal] = useState(false);
    const products = useSelector((state) => state.cart.products);

  return (
    <div className= {css.container}> 
        <Link to="/">
            <div className={css.logo}> 
                <img src={Logo} alt="Logo" />  
            </div>
        </Link>
        {/* <div className={css.logo}>  */}
            {/* <img src= {Logo} to="/" alt='Logo' />  */}
            {/* <span>Amrit Dawani</span> */}
        {/* </div> */}

        <div className={css.right}>
            <div className= {css.menu}>
                <ul className={css.menu}> 
                    {/* <li>Collection</li> */}
                    <li> 
                        <Link className='link' to="/allproducts">Products</Link>
                    </li>
                    <li>
                        <Link className ="link" to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link className ="link" to="/contact-us">Contact us</Link>
                    </li>
                    <li><SearchIcon onClick={() => setSearchModal(true)} /></li>
                    <li>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{products.length}</span>
                        </div>
                    </li>
                </ul>
                
                
            </div>
            
            {/* <input className={css.search} type = 'text' placeholder='Search Products'>

            </input> */}
            
            {/* <img src= {Cart} alt='cart' className= {css.cart} /> */}
            {/* <CgShoppingBag className={css.cart}/> */}
            {open && <Cart/>}
        </div>
        {searchModal && <Search setSearchModal={setSearchModal} />}
        
    </div>
  )
}

export default Nav