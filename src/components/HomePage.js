import React from 'react';
import NavigationPanel from './NavigationPanel';
import AllDoctors from './AllDoctors';

const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>
      <div>
        <NavigationPanel />
      </div>
      <h2>
        Hello
        {userData.name}
        {' '}
        Welcome to the Homepage
      </h2>
      <div>
        <AllDoctors />
      </div>
    </div>
  );
};

export default HomePage;
