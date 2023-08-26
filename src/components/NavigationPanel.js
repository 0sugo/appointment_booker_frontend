import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn,
} from 'react-icons/fa';
import LogoutButton from './session/LogoutButton';

const NavigationPanel = () => (
  <navbar className='Navbar'>
    <h4 className="nav_h4">Doctors Appointment</h4>

    <nav>
      <NavLink to="/homepage" className="each_nav">Doctors</NavLink>

      <NavLink to="/homepage" className="each_nav">Add Doctors</NavLink>
      <NavLink to="/homepage" className="each_nav">Delete Doctors</NavLink>
      {localStorage.getItem('userData') && (
      <>
        <NavLink to="/add-item" className="each_nav">Reserve form</NavLink>
      </>
      )}

      <NavLink to="/all-reservations" className="each_nav">All Reservations</NavLink>

      <LogoutButton />

    </nav>

    <ul className="social-links nav_social_links">
      <li className="social-link">
        <FaTwitter />
      </li>
      <li className="social-link">
        <FaFacebookF />
      </li>
      <li className="social-link">
        <FaLinkedinIn />
      </li>
    </ul>
  </navbar>
);

export default NavigationPanel;
