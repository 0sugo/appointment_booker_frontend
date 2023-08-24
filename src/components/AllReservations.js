import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchAllReservations } from '../redux/reservations/reservationsSlice';

const AllReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);

  useEffect(() => {
    dispatch(fetchAllReservations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };
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
              <button onClick={() => handleDelete(reservation.id)} type="button">delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllReservations;
