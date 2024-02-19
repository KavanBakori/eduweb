import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate=useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">

        <a href="/" className="logo" onClick={()=>navigate('/')}>
          <img src="/images/anilearn2.png" style={{filter:'invert(100%)'}} width="232" height="50" alt="EduWeb logo" />
        </a>

        <nav className="navbar" data-navbar>

          <div className="wrapper">
            {/* <a href="#" className="logo">
              <img src="images/anilearn2.png" width="162" height="50" alt="EduWeb logo" />
            </a> */}

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item" style={{ color: 'black' }}>
              <a href="/" className="navbar-link" data-nav-link>Home</a>
            </li>

            <li className="navbar-item">
              <a href="/about" className="navbar-link" data-nav-link>About</a>
            </li>

            <li className="navbar-item">
              <a href="/cource" className="navbar-link" data-nav-link>Courses</a>
            </li>

            <li className="navbar-item">
              <a href="/blog" className="navbar-link" data-nav-link>Blog</a>
            </li>

            <li className="navbar-item">
              <a href="/contact" className="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>

        </nav>

        <div className="header-actions">

          <button className="header-action-btn" aria-label="toggle search" title="Search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>

          <button className="header-action-btn" aria-label="cart" title="Cart">
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

            <span className="btn-badge">0</span>
          </button>

          <a href="/login" className="btn has-before">
            <span className="span">Try for free</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              <img src='/images/user_profile_icon.png' alt='user_profile' width={'30px'} height={''}></img>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile">My Profile</a>
                <a href="/profile">My Profile</a>
                <a href="/profile">My Profile</a>
                {/* Add more dropdown items here */}
              </div>
            )}
          </div>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>

      </div>
    </header>
  );
};

export default Header;
