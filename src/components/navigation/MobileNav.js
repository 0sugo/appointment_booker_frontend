import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import LogoutButton from '../session/LogoutButton';

const MobileNav = () => {
  const [menuOpen, menuOpenState] = useState(false);

  const toggleMenu = () => {
    menuOpenState(!menuOpen);
  };

  return (
    <div className="mobile_nav">
      <button
        data-testid="hamburger"
        className="hamburger"
        onClick={toggleMenu}
        type="button"
      >
        <GiHamburgerMenu />
      </button>

      <nav
        data-testid="mobile_menu"
        className={`mobile_menu ${menuOpen ? 'open' : ''}`}
      >
        <button onClick={toggleMenu} type="button" className="close_menu">
          <MdCancel />
        </button>
        <nav>
          <NavLink to="/homepage" className="each_nav">
            Doctors
          </NavLink>

          {localStorage.getItem('userData') && (
            <>
              <NavLink to="/add-doctor" className="each_nav">
                Add Doctors
              </NavLink>
              <NavLink to="/add-item" className="each_nav">
                Reserve form
              </NavLink>
            </>
          )}

          <NavLink to="/all-reservations" className="each_nav">
            All Reservations
          </NavLink>

          <LogoutButton />
        </nav>
      </nav>
    </div>
  );
};

export default MobileNav;
