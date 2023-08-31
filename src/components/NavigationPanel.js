import React from "react";
import { Link } from "react-router-dom";

const NavigationPanel = () => (
  <nav>
    <Link to="/homepage">Doctors</Link>
    <br />

    {localStorage.getItem("userData") && (
      <>
        <Link to="/add-item">Reserve form</Link>
        <br />
        <Link to="/add-doctor">Add Doctor</Link>
      </>
    )}

    <br />

    <Link to="/all-reservations">All Reservations</Link>
  </nav>
);

export default NavigationPanel;
