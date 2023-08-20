import React, { useState, useEffect } from 'react';
import {  Link, useNavigate  } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginSuccess, setLoginSuccess] = useState(false); 
  const [loginFailure, setLoginFailure] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = 'http://127.0.0.1:4000/api/v1/users/sign_in'; 
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
        const data = await response.json(); 
        localStorage.setItem('userData', JSON.stringify(data));
        setLoginSuccess(true);  
        navigate('/homepage')
     } else {
        setLoginFailure(true)
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginSuccess ? ( 
        <div>
          <p>Login successful! Welcome back.</p>
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
         
        {loginFailure && (
          <div>
            <p>Invalid email or password.</p>
          </div>
        )}
    </div>
    
  );
}

export default LoginForm;
