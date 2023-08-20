import React, { useState, useEffect } from 'react';
import {  Link, useNavigate  } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginSuccess, setLoginSuccess] = useState(false); // New state
  
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = 'http://127.0.0.1:4000/api/v1/users/sign_in'; // Update URL as needed
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        // Handle successful login
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data));
        setLoginSuccess(true); // Set login success state
        console.log('Login successful:', data); 
        navigate('/homepage')
     } else {
        const data = await response.json();
        // Handle error response
        console.error('Login error:', data);
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginSuccess ? ( // Conditional rendering for success message
        <div>
          <p>Login successful! Welcome back.</p>
          {/* <Link to={{ pathname: '/homepage', state: { userData } }}>Go to Homepage</Link>
         */}
         {/* <NavigateToHomepage userData={userData} /> */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </form>
      )}
         
    </div>
    
  );
}

export default LoginForm;
