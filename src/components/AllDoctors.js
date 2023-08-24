import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    doctorsContainerRef.current.scrollLeft -= 300; 
  };

  const scrollRight = () => {
    doctorsContainerRef.current.scrollLeft += 300; 
  };

  return (
    <div>
      <div className="home_header">
        <h2>Available Doctors</h2>
        <p>Please select a doctor to book an appointment with</p>
        <div className="dots">
          {[...Array(15)].map(() => (
            <div key="div" className="dot" />
          ))}
        </div>
      </div>

      <div className="homepage_content">
        <button type="button" onClick={scrollLeft} className="prev_btn">&lt;</button>

        <section className="allDoctors" ref={doctorsContainerRef}>

          {allDoctors.map((eachDoctor) => (
            <a href={`/doctordetails/${eachDoctor.id}`} key={eachDoctor.id}>
              <article className="eachDoctor">

                <div className="img_div">
                  <img src={eachDoctor.image_url} alt={eachDoctor.name} />
                </div>
                <h3 className="each_doc_name">{eachDoctor.name}</h3>
                <div className="dots">
                  {[...Array(15)].map(() => (
                    <div key="div" className="dot" />
                  ))}
                </div>
                <p className="each_doc_spec">
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

              </article>
            </a>
          ))}
        </section>
        <button type="button" onClick={scrollRight} className="next_btn">&gt;</button>
      </div>

    </div>
  );
};

export default AllDoctors;
