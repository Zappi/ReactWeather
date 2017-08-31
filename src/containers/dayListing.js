import React from 'react';

class DayListing extends React.Component {

  render(){
    return (
    <div className="container-fluid three-day-weatherListing">

      <table className="table">
        <thead>
        <tr>
          <th> 3 Day weather </th>
        </tr>
        </thead>
        <tbody>
          weather predictions will come here as table
        </tbody>
      </table>
    </div>
  );
  }
};

export default DayListing;
