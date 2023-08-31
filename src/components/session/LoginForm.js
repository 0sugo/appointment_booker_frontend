import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        navigate('/homepage');
      } else {
        setLoginFailure(true);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="splash_page">
      <h2 className="h2_login">Login</h2>
      {loginSuccess ? (
        <div>
          <p>Login successful! Welcome back.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" className="splash_link login_btn">Login</button>
          <Link to="/register" className="splash_link">Register</Link>
        </form>

      )}

      {loginFailure && (
      <div>
        <p className="login_error">Invalid email or password.</p>
      </div>
      )}
    </div>

  );
};

export default LoginForm;
