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
import DoctorDetails from './components/DoctorDetails';
import AddDoctor from './components/AddDoctorForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReservations());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/add-item" element={<AddItemForm />} />
        <Route path="/all-reservations" element={<AllReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
