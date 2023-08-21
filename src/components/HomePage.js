import React from 'react';
/* eslint-disable */
import NavigationPanel from './NavigationPanel';

const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>
      <div>
        <NavigationPanel />
      </div>
      <h2>Hello {userData.name} Welcome to the Homepage</h2>
    </div>
  );
};

export default HomePage;
