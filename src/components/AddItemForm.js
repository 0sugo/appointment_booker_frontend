import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservationsSlice';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addReservation({ doctorId, date, city }));
      setSuccessMessage('Reservation added successfully');
      setDoctorId('');
      setDate('');
      setCity('');
    } catch (error) {
      setSuccessMessage('Error adding reservation');
    }

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
