import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFailure, setRegistrationFailure] = useState(false);
  const [errorData, setErrorData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = 'http://127.0.0.1:4000/api/v1/users';
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
        setRegistrationSuccess(true);
      } else {
        const data = await response.json();
        setErrorData(data.errors);
        setRegistrationFailure(true);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {registrationSuccess ? (
        <div>
          <p>Registration successful! You can now log in.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.name && (
            <p>
              Name
              {errorData.name[0]}
            </p>
          )}
          <br />
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.email && (
            <p>
              Email
              {errorData.email[0]}
            </p>
          )}
          <br />
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>

          {registrationFailure && errorData && errorData.password && (
            <p>
              Password
              {errorData.password[0]}
            </p>
          )}
          <br />
          <label htmlFor="confirm_password">
            Confirm Password:
            <input
              id="confirm_password"
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </label>
          {registrationFailure && errorData && errorData.password_confirmation && (
            <p>
              Password
              {errorData.password_confirmation[0]}
            </p>
          )}
          <br />
          <button type="submit">Register</button>
        </form>
      )}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default RegistrationForm;
