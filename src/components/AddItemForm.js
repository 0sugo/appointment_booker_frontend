/* eslint-disable */
import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = ({ currentUser }) => {
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/v1/reservations', {
        user_id: currentUser.id,
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
  };

  return (
    <>
      <div>AddItemForm</div>
      <form onSubmit={handleSubmit}>
        <label>
          Doctor id:
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} placeholder="Choose doctor" />
        </label>
        <br />
        <label>
          Date:
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Choose date" />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Choose city" />
        </label>
        <br />
        <button type="submit">Add Item</button>

      </form>
    </>
  );
};

export default AddItemForm;
