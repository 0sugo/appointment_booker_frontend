// const AllReservations = () => {
//   const dispatch = useDispatch();
//   const reservations = useSelector((state) => state.reservations.reservations);
//   const isLoading = useSelector((state) => state.reservations.isLoading);
//   const doctors = useSelector((state) => state.reservations.doctors);

//   useEffect(() => {
//     dispatch(fetchAllReservations());
//     dispatch(fetchAllDoctors());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteReservation(id));
//   };

//   return (
//     <div>
//       <h2>Reservations</h2>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="flexer each-reservation">
//           {reservations.map((reservation) => {
//             const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
//             return (
//               <li key={reservation.id}>
//                 <div>
//                   {doctor ? (
//                     <img src={doctor.image_url} alt={doctor.name} style={{ width: '100px' }} />
//                   ) : (
//                     <p>No image available</p>
//                   )}
//                 </div>
//                 <div>
//                   Doctor Name:
//                   {' '}
//                   {doctor ? doctor.name : 'Unknown'}
//                   ,
//                   <br />
//                   Specialisation:
//                   {' '}
//                   {doctor ? doctor.specialisation : 'Unknown'}
//                   ,
//                   <br />
//                   Appointment date:
//                   {' '}
//                   {reservation.date}
//                   ,
//                   <br />
//                   City of appointment:
//                   {' '}
//                   {reservation.city}
//                   <br />
//                 </div>
//                <button onClick={() => handleDelete(reservation.id)} type="button">delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AllReservations;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchAllDoctors, fetchAllReservations } from '../redux/reservations/reservationsSlice';
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
    setScrollX(scrollX - 300);
  };

  const scrollRight = () => {
    setScrollX(scrollX + 300);
  };

  const isScrollableRight = scrollX < 0;
  const isScrollableLeft = scrollX > -(reservations.length - 3) * 300;

  return (
    <div className="homepage_flex">
      <div className="desk_nav">
        <NavigationPanel />
      </div>
      <section className="doctors_div">
        <div className="reserve">
          <h2>Reservations</h2>
          <div className="scroll-container">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ul className="flexer each-reservation" style={{ transform: `translateX(${scrollX}px)` }}>
                {reservations.map((reservation) => {
                  const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
                  return (
                    <li key={reservation.id} className="reservation-card">
                      <div>
                        {doctor ? (
                          <img src={doctor.image_url} alt={doctor.name} style={{ width: '100px' }} />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                      <div>
                        Doctor Name:
                        {' '}
                        {doctor ? doctor.name : 'Unknown'}
                        <br />
                        Specialisation:
                        {' '}
                        {doctor ? doctor.specialisation : 'Unknown'}
                        <br />
                        Appointment date:
                        {' '}
                        {reservation.date}
                        <br />
                        City of appointment:
                        {' '}
                        {reservation.city}
                        <br />
                      </div>
                      <button onClick={() => handleDelete(reservation.id)} type="button">delete</button>
                    </li>
                  );
                })}
              </ul>
            )}
            <button className="scroll-button left" type="button" onClick={scrollLeft} disabled={!isScrollableLeft}>{'<'}</button>
            <button className="scroll-button right" type="button" onClick={scrollRight} disabled={!isScrollableRight}>{'>'}</button>
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
