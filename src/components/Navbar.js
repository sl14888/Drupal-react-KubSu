import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import { MenuItems } from './MenuItems';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
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
}

export default Navbar;
