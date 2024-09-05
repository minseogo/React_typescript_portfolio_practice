import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDeepDropdown = () => {
    setDeepDropdownOpen(!deepDropdownOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment below if you wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
          <h1 className="sitename">LOGO</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active text-decoration-none">Home</a></li>
            <li><a href="#about" className='text-decoration-none'>About Me</a></li>
            <li><a href="#Experience" className='text-decoration-none'>Experience</a></li>
            <li ><a href="#portfolio" className='text-decoration-none'>Portfolio</a></li>

            {/* Dropdown Menu */}
            {/* <li className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
              <a href="#" onClick={toggleDropdown}>
                <span>Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={dropdownOpen ? 'show' : ''}>
                <li><a href="#">Dropdown 1</a></li>
                <li className={`dropdown ${deepDropdownOpen ? 'show' : ''}`}>
                  <a href="#" onClick={toggleDeepDropdown}>
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={deepDropdownOpen ? 'show' : ''}>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> */}

            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Nav Toggle */}
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;