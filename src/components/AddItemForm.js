import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  fetchAllDoctors,
} from "../redux/reservations/reservationsSlice";
import NavigationPanel from "./navigation/NavigationPanel";
import MobileNav from "./navigation/MobileNav";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const doctors = useSelector((state) => state.reservations.doctors);
  const location = useLocation();
  const { doctorId: initialDoctorId } = location.state || {};

  useEffect(() => {
    dispatch(fetchAllDoctors());
    if (initialDoctorId) {
      setDoctorId(initialDoctorId);
    }
  }, [dispatch, initialDoctorId]);

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
    <div className="home">
      <div className="homepage_flex">
        <div className="desk_nav">
          <NavigationPanel />
        </div>
        <section className="doctors_div">
          <div className="container">
            <div className="homer">
              <div className="form-container flexer exclusive overlay">
                <div className="hero-reserve flexer">
                  <h3>RESERVE AN APPOINTMENT</h3>
                  <hr />
                  <p>
                    Welcome to Doctors reservation section. Here you are going
                    to pick a doctor,city and the specific date for the
                    appointment{" "}
                  </p>
                </div>
                <form className="form-reserve flexer" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    required
                  />
                  <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Choose date"
                    required
                  />
                  <div className="flexer abs">
                    <select
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      required
                    >
                      <option value="">Select doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                    <button type="submit">Book now</button>
                  </div>
                </form>
                {successMessage && (
                  <div className="output">{successMessage}</div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="mobile_na">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
