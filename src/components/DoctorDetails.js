import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  doctorDetailsSelector,
  fetchDoctorDetails,
} from '../redux/doctors/detailsSlice';
import DetailsTable from './DetailsTable';
import '../styles/doctor-details.css';
import { deleteDoctor } from '../service/doctorsService';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notice, setNotice] = useState('');
  const {
    doctorDetails: { data },
  } = useSelector(doctorDetailsSelector);
  const { id } = useParams();

  const handleDelete = async (id) => {
    const messge = await deleteDoctor(id);
    setNotice(messge);
    setTimeout(() => {
      setNotice('');
      navigate('/homepage', { replace: true });
    }, 2000);
  };
  useEffect(() => {
    dispatch(fetchDoctorDetails(id));
  }, [dispatch, id]);

  return (
    <div className="details-wrapper">
      <button
        type="button"
        onClick={() => handleDelete(id)}
        className="delete-btn"
      >
        Delete
      </button>
      {notice && <div className="notice">{notice}</div>}
      <div className="details-container">
        <div className="doc-img-container">
          {data?.image_url && (
            <img src={data?.image_url} alt={`${data?.name} pic`} />
          )}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="prev_btn"
          >
            &lt;
          </button>
        </div>
        {data && (
          <div className="table-container">
            <DetailsTable detailsData={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
