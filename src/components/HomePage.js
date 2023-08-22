import React from 'react';
import LogoutButton from './LogoutButton';
import AddItemForm from  './AddItemForm';
import { Link } from 'react-router-dom';
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

      <h2>
        Hello
        {userData.name}
        {' '}
        Welcome to the Homepage
      </h2>

    </div>
  );
};

export default HomePage;
