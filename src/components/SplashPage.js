import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
  <div>
    <h1>Welcome to Our App!</h1>
    <p>Join us and explore our amazing features.</p>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
);

export default SplashPage;
