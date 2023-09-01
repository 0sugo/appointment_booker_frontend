import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const NavigateToSplashPage = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <button type="button" onClick={NavigateToSplashPage} className="logout_btn">
      Logout
    </button>
  );
};

export default LogoutButton;
