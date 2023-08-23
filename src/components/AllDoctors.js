import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../redux/doctors/doctorSlice';

const AllDoctors = () => {
  const allDoctors = useSelector((state) => state.doctors.allDoctors);
  const dispatch = useDispatch();
  const doctorsContainerRef = useRef(null);

  useEffect(() => {
    if (allDoctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, allDoctors.length]);

  const scrollLeft = () => {
    doctorsContainerRef.current.scrollLeft -= 300; // Adjust the scroll amount
  };

  const scrollRight = () => {
    doctorsContainerRef.current.scrollLeft += 300; // Adjust the scroll amount
  };

  return (
    <div>
      <h2>Available Doctors</h2>
      <p>Please select a doctor to book an appointment with</p>

      <div className="homepage_content">
        <button type="button" onClick={scrollLeft} className='prev_btn'>&lt;</button>

        <section className="allDoctors" ref={doctorsContainerRef}>
          {allDoctors.map((eachDoctor) => (
            <article className="eachDoctor" key={eachDoctor.id}>
              <img src={eachDoctor.image_url} alt={eachDoctor.name} />
              <h3>{eachDoctor.name}</h3>
              <p>
                Specializes in
                {' '}
                {eachDoctor.specialisation}
                {' '}
                and currently practicing in
                {' '}
                {eachDoctor.city}
                {' '}
                city
              </p>
              <Link to="">See More</Link>
            </article>
          ))}
        </section>
        <button type="button" onClick={scrollRight} className='next_btn'>&gt;</button>
      </div>

    </div>
  );
};

export default AllDoctors;
