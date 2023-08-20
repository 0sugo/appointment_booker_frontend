import React from 'react';

const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>
      <h2>Hello {userData.user_name} Welcome to the Homepage</h2>

    </div>
  );
};

export default HomePage;
