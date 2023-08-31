import PropTypes from 'prop-types';
import '../styles/details-table.css';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const DetailsTable = ({ detailsData }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/add-item', {
      replace: true,
      state: {
        doctorId: detailsData.id,
        detailsData,
      },
    });
  };

  return (
    <div className="table-container">
      <div className="title">
        <h2>{detailsData.name}</h2>
        <p>- $50 Pre-Payment on Reservation</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{detailsData.name}</td>
          </tr>
          <tr>
            <td>Specialisation</td>
            <td>{detailsData.specialisation}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{detailsData.city}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>1 Hour</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick} type="button" className="reserve-btn">
        Reserve
        <AiOutlineRightCircle fontSize="19px" />
      </button>
    </div>
  );
};

export default DetailsTable;

DetailsTable.propTypes = {
  detailsData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specialisation: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
