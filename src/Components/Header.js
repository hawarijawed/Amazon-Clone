import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
function Header() {
  return (
    <nav className='header'>
      <Link to="/Home">
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazone logo' />
     </Link>
     {/* Adding search-bar */}
     <div className='header_input'>
        <input type='text' className='header_searchInput' />
        <div className='search_icon' >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
     </div>
    {/*Links for header */}
    <div className='header_nav'>
      {/*First link */}
      <Link to="/Checkout" className='header_link'>
      <div className='header_option'>
        <span className="headerLine1">Hello,</span>
        <span className="headerLine2">Sign In</span>
      </div>
      </Link>
      {/*Second link*/}
      <Link to="/Checkout" className='header_link'>
      <div className='header_option'>
        <span className="headerLine1">Returns</span>
        <span className="headerLine2">& Orders</span>
      </div>
      </Link>
      {/*Third link*/}
      <Link to="/Checkout" className='header_link'>
      <div className='header_option'>
        <span className="headerLine1">Your,</span>
        <span className="headerLine2">Prime</span>
      </div>
      </Link>
      {/*Fourth link*/}
      <Link to="/Checkout" className='header_link'>
      <div className='header_optionBasket'>
      <FontAwesomeIcon icon={faCartShopping} />
        <span className="headerLine2 header_basketCount">0</span>
      </div>
      </Link>
    </div>
    </nav>
   
  )
}

export default Header
