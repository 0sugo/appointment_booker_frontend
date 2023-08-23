import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../redux/doctors/doctorSlice';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
  const allDoctors = useSelector((state) => state.doctors.allDoctors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allDoctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, allDoctors.length]);

  return (
    <section className="allDoctors">
    <h2>Available Doctors</h2>
    <p>Please select a doctor to book an appointment with</p>
    {allDoctors.map((eachDoctor) => (
      <article className='eachDoctor' key={eachDoctor.id}>
        <img src={eachDoctor.image_url} alt={eachDoctor.name} />
        <h3>{eachDoctor.name}</h3>
        <p>Specializes in {eachDoctor.specialisation} and currently practicing in {eachDoctor.city} city</p>
        <Link to={''}>See More</Link>
      </article>
    ))}
  </section>
  );
};

export default AllDoctors;
