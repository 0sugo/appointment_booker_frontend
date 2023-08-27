import "../styles/details-table.css";

const DetailsTable = ({ detailsData }) => {
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
    </div>
  );
};

export default DetailsTable;
