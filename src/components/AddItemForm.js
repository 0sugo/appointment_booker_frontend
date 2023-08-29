import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  fetchAllDoctors,
} from "../redux/reservations/reservationsSlice";
import { useLocation } from "react-router";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const doctors = useSelector((state) => state.reservations.doctors);
  useEffect(() => {
    dispatch(fetchAllDoctors());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addReservation({ doctorId, date, city }));
      setSuccessMessage("Reservation added successfully");
      setDoctorId("");
      setDate("");
      setCity("");
    } catch (error) {
      setSuccessMessage("Error adding reservation");
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <div>AddItemForm</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="doctorId">
          Doctor:
          <select
            value={location.state ? location.state?.id : doctorId}
            disabled={location.state ? true : false}
            onChange={(e) => setDoctorId(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="date">
          Date:
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Choose date"
          />
        </label>
        <br />
        <label htmlFor="city">
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Choose city"
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
      {successMessage && <div>{successMessage}</div>}
    </>
  );
};

export default AddItemForm;
