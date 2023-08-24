import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import NavigationPanel from './NavigationPanel';


const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>

      {localStorage.getItem('userData') && (
        <>
          <Link to="/add-item">Add Item</Link>
        </>
      )}

      <br />

      <Link to="/all-reservations">All Reservations</Link>

      <div>
        <NavigationPanel />
      </div>

      <h2>
        Hello
        {userData.name}
        {' '}
        Welcome to the Homepage
      </h2>

      <LogoutButton />
    </div>
  );
};

export default HomePage;
