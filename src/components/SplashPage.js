import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
  <div className="splash_page">
    <h2>Doctors Appointment</h2>
    <p>Welcome to the Doctors Appointment app</p>
    <div className="splash_links">
      <Link to="/login" className="splash_link">
        Login
      </Link>
      <Link to="/register" className="splash_link">
        Register
      </Link>
    </div>
  </div>
);

export default SplashPage;
