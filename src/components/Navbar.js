import React, { useState } from 'react'
import './Navbar.css'
import { FaPhoneVolume } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-top">
        <div className="elements">
          <div className="title">
            <a href="/">Big<span>White</span></a>
          </div>
          <div className="number">
            <FaPhoneVolume className='icon'/>
            <a href="/">+(381)61-27-666-05</a>
          </div>
        </div>
      </div>

      <div className="nav-center">
        <div className="elements">
          <div className="title">
            <span>fishing store</span>
          </div>
          <div className="cart-shop-person">
            <Link to="/home">
              <AiOutlineShoppingCart className='icon'/>
            </Link>
            Kosár(0)
            <a href="/"><BsFillPersonFill className='icon'/></a>
          </div>
        </div>
      </div>
      
    <div className="nav-bottom">
      <div className="links">
        <Link to="/home">Kezdőoldal</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">Rólunk</Link>
        <Link to="/shop">Áruház</Link>
        <Link to="/favourites">Kedvencek</Link>
        <Link to="/contact">Kapcsolat</Link>
        <Link to="/admin">Admin</Link>
        <div className="menu" onClick={toggleMenu}>
          <AiOutlineMenu className='icon'/>
        </div>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
        <a href="/">Blog</a>
        <a href="/">Rólunk</a>
        <a href="/">Áruház</a>
        <a href="/">Újdonságok</a>
        <a href="/">Kedvencek</a>
        </div>
      )}
    </div>

    </nav>
  )
}

export default Navbar;