import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchAllDoctors, fetchAllReservations } from '../redux/reservations/reservationsSlice';

const AllReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const doctors = useSelector((state) => state.reservations.doctors);

  useEffect(() => {
    dispatch(fetchAllReservations());
    dispatch(fetchAllDoctors());
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
          {reservations.map((reservation) => {
            const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
            return (
              <li key={reservation.id}>
                Doctor Name:
                {' '}
                {doctor ? doctor.name : 'Unknown'}
                ,
                Date:
                {' '}
                {reservation.date}
                ,
                City:
                {' '}
                {reservation.city}
                <button onClick={() => handleDelete(reservation.id)} type="button">delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AllReservations;
