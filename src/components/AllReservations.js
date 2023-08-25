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
      <h2>Reservations</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reservations.map((reservation) => {
            const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
            return (
              <li key={reservation.id}>
                <div>
                  <img src={doctor.image_url} alt={doctor.name} style={{ width: '100px' }} />
                </div>
                <div>
                  Doctor Name:
                  {' '}
                  {doctor ? doctor.name : 'Unknown'}
                  ,
                  <br />
                  Specialisation:
                  {' '}
                  {doctor.specialisation}
                  ,
                  <br />
                  Appointment date:
                  {' '}
                  {reservation.date}
                  ,
                  <br />
                  City of appointment:
                  {' '}
                  {reservation.city}
                  <br />
                </div>
                <button onClick={() => handleDelete(reservation.id)} type="button">delete</button>
                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AllReservations;
