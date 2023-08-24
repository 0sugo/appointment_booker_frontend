import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchAllReservations } from '../redux/reservations/reservationsSlice';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setCurrentUser(userData);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:4000/api/v1/users/${currentUser.id}/reservations`, {
        user_id: currentUser ? currentUser.id : null,
        doctor_id: doctorId,
        date,
        city,
      });

      // Handle success or show a message to the user
      console.log(response.data);
    } catch (error) {
      // Handle error or show error message
      console.error(error);
    }
    setDoctorId('');
    setDate('');
    setCity('');

    setSuccessMessage('Reservation submitted successfully');
    dispatch(fetchAllReservations());

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <>
      <div>AddItemForm</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="doctorId">
          Doctor id:
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} placeholder="Choose doctor" />
        </label>
        <br />
        <label htmlFor="date">
          Date:
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Choose date" />
        </label>
        <br />
        <label htmlFor="city">
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Choose city" />
        </label>
        <br />
        <button type="submit">Add Item</button>

      </form>
      {successMessage && <div>{successMessage}</div>}
    </>
  );
};

export default AddItemForm;
