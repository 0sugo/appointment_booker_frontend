import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteReservation,
  fetchAllDoctors,
  fetchAllReservations,
} from '../redux/reservations/reservationsSlice';
import '../reservations.css';
import NavigationPanel from './navigation/NavigationPanel';
import MobileNav from './navigation/MobileNav';

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

  const [scrollX, setScrollX] = useState(0);

  const scrollLeft = () => {
    setScrollX(scrollX - 120);
  };

  const scrollRight = () => {
    setScrollX(scrollX + 120);
  };

  const isScrollableRight = scrollX < 0;
  const isScrollableLeft = scrollX > -(reservations.length - 1) * 203;

  return (
    <div className="homepage_flex">
      <div className="desk_nav">
        <NavigationPanel />
      </div>
      <section className="doctors_div">
        <div className="reserve">
          <div>
            <h2 className="center">Reservations</h2>
            <hr />
          </div>
          <div className="flexer table_buttons">
            {isScrollableLeft && (
              <button
                className="scroll-button left"
                type="button"
                onClick={scrollLeft}
              >
                {'<'}
              </button>
            )}

            <div className="scroll-container">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <ul
                  className="flexer all-reservations"
                  style={{ transform: `translateX(${scrollX}px)` }}
                >
                  {reservations.map((reservation) => {
                    const doctor = doctors.find(
                      (doc) => doc.id === reservation.doctor_id,
                    );
                    return (
                      <li key={reservation.id} className="reservation-card flexer">
                        <div>
                          {doctor ? (
                            <div className="doctor-image">
                              <img
                                src={doctor.image_url}
                                alt={doctor.name}
                                className="doctor-img"
                              />
                            </div>
                          ) : (
                            <p>No image available</p>
                          )}
                        </div>
                        <div className="reservation-details">
                          <p className="doctor-name">{doctor ? doctor.name : 'Unknown'}</p>
                          <p className="specialisation">
                            Specialisation:
                            {' '}
                            {doctor ? doctor.specialisation : 'Unknown'}
                          </p>
                          <p className="appointment-date">
                            Appointment date:
                            {' '}
                            {reservation.date}
                          </p>
                          <p className="city">
                            City of appointment:
                            {reservation.city}
                          </p>
                        </div>

                        <button
                          onClick={() => handleDelete(reservation.id)}
                          type="button"
                        >
                          delete
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {isScrollableRight && (
              <button className="scroll-button right" type="button" onClick={scrollRight}>{'>'}</button>
            )}
          </div>
        </div>
      </section>
      <div className="mobile_na">
        <MobileNav />
      </div>
    </div>
  );
};

export default AllReservations;
