import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {
  doctorDetailsSelector,
  fetchDoctorDetails,
} from '../redux/doctors/detailsSlice';
import DetailsTable from './DetailsTable';
import '../styles/doctor-details.css';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    doctorDetails: { data },
  } = useSelector(doctorDetailsSelector);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDoctorDetails(id));
  }, [id]);

  return (
    <div className="details-container">
      <div className="doc-img-container">
        {data?.image_url && (
          <img src={data?.image_url} alt={`${data?.name} pic`} />
        )}
        <button type="button" onClick={() => navigate(-1)} className="prev_btn">
          &lt;
        </button>
      </div>
      {data && <DetailsTable detailsData={data} />}
    </div>
  );
};

export default DoctorDetails;
