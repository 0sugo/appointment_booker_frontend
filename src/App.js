/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import RegistrationForm from './components/session/RegistrationForm'
import LoginForm from './components/session/LoginForm';
import HomePage from './components/HomePage';
import AddItemForm from './components/AddItemForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/add-item" element={<AddItemForm />} />
      </Routes>
    </Router>
  );
}

export default App;
