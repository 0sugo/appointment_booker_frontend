import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state

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
        // Handle successful registration
        setRegistrationSuccess(true); // Set registration success state
        console.log('User registered:', response);
      } else {
        const data = await response.json();
        // Handle error response
        console.error('Registration error:', data.error);
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {registrationSuccess ? ( // Conditional rendering for success message
        <div>
          <p>Registration successful! You can now log in.</p>
          {/* <Link to="/login">Login</Link> */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
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
          <label>
            Confirm Password:
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
        
      )}
      <Link to="/login">Login</Link>
    </div>
  );
}

export default RegistrationForm;
