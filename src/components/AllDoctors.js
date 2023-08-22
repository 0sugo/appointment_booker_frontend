import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from './redux/doctorSlice';

const AllDoctors = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch]);

    return (
        <div>
            Hello
        </div>
    );
};

export default AllDoctors;
