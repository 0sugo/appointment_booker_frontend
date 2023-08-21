import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import RegistrationForm from './components/session/RegistrationForm';
import LoginForm from './components/session/LoginForm';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />

        {/* Kindly import and add other routes for your components */}
      </Routes>
    </Router>
  );
}

export default App;
