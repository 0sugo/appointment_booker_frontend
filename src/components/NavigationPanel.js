import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const NavigationPanel = () => (
  <nav>
    <Link to="/homepage">Doctors</Link>

    {/* Please kindly add links to your components */}

    <LogoutButton />
  </nav>
);

export default NavigationPanel;
