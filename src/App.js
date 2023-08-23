import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SplashPage from './components/SplashPage';
import RegistrationForm from './components/session/RegistrationForm';
import LoginForm from './components/session/LoginForm';
import HomePage from './components/HomePage';
import AddItemForm from './components/AddItemForm';
import AllReservations from './components/AllReservations';
import { fetchAllReservations } from './redux/reservations/reservationsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReservations());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/add-item" element={<AddItemForm />} />
        <Route path="/all-reservations" element={<AllReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
