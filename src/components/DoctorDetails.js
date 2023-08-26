import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doctorDetailsSelector,
  fetchDoctorDetails,
} from "../redux/doctors/detailsSlice";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDoctorDetails(id));
  }, []);
  return (
    <div>
      <h1>Doctor id:{id}</h1>
    </div>
  );
};

export default DoctorDetails;
