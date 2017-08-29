import React from 'react';

class DayListing extends React.Component {

  render(){
    return (
    <div className="three-day-weatherListing">

      <table style={{width: '80%'}}>
        <tr>
          <th>3 DAYS WEATHER </th>
        </tr>
        <tr> DAY 1 </tr>
        <tr> DAY 2 </tr>
        <tr> DAY 3 </tr>
      </table>

    </div>
    )
  }
};

export default DayListing;
