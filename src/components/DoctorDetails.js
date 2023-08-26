import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchDoctorDetails } from '../redux/doctors/detailsSlice';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDoctorDetails(id));
  }, [id]);
  return (
    <div>
      <h1>
        Doctor id:
        {id}
      </h1>
    </div>
  );
};

export default DoctorDetails;
