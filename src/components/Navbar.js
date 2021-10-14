import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import { MenuItems } from './MenuItems';

const STYLES = ['navbar', 'navbar-bg'];

export const Navbar = ({ navbarStyle }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const checkNavbarStyle = STYLES.includes(navbarStyle)
    ? navbarStyle
    : STYLES[0];
  return (
    <>
      <nav className={`${checkNavbarStyle}`} id={navbarClasses.join('_')}>
        <div className="navbar__container">
          <div className="navbar__test">
            <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
              <img src="images/svg/logo.svg" alt="Logo" />
            </Link>
            <div className="menu__icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
              {MenuItems.map((item, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      to={item.to}
                      className={item.cName}
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="navbar__info">
            <a href="tel:88002222673" className="navbar__info-tel">
              8 800 222-26-73
            </a>
            <div className="dropdown">
              <div className="dropbtn">RU</div>
              <div className="dropdown-content">
                <div>RU</div>
                <div>EN</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
