import React from 'react';
import { useSelector } from 'react-redux';
// import fetchAllReservations from '../redux/reservations/reservationsSlice';

const AllReservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);

  return (
    <div>
      <h2>AllReservations</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              Doctor ID:
              {reservation.doctor_id}
              ,Date:
              {reservation.date}
              ,City:
              {reservation.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllReservations;
