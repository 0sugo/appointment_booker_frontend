import React from 'react';
/* eslint-disable */
import LogoutButton from './LogoutButton';

const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>
      <h2>Hello {userData.name} Welcome to the Homepage</h2>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
