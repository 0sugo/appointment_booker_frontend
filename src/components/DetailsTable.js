import React from "react";

const DetailsTable = ({ detailsData }) => {
  return (
    <div className="table-container">
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
            <td>Per Hour</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
