import React from 'react';
/* eslint-disable */
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
          <Link to="/add-item">Add Item</Link> {/* Button to navigate to AddItemForm */}
          {/* <AddItemForm currentUser={JSON.parse(localStorage.getItem('userData'))} /> */}
        </>
      )}
      <h2>Hello {userData.name} Welcome to the Homepage</h2>
      <LogoutButton />

        {/* {localStorage.getItem('userData') && (
          <AddItemForm currentUser={JSON.parse(localStorage.getItem('userData'))} />
        )} */}

    </div>
  );
};

export default HomePage;
