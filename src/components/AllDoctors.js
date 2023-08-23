import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from './redux/doctorSlice';

const AllDoctors = () => {
    const allDoctors = useSelector((state) => state.doctors.allDoctors);
    const dispatch = useDispatch();

    useEffect(() => {
        if (allDoctors.length === 0) {
            dispatch(fetchDoctors());
        }
    }, [dispatch, allDoctors.length])

    return (
        <div className='allDoctors'>
            Hello
            {allDoctors.forEach(eachDoctor => {
                <p>
                    {console.log(eachDoctor)}
                </p>
            })}
        </div>
    );
};

export default AllDoctors;
