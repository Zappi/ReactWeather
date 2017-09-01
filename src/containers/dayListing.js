import React from 'react';
import DayInfo from '../components/dayInfo';

class DayListing extends React.Component {

  renderForecastes(weatherData) {

    return(
      <tr key={weatherData.dt}>
      <td> <DayInfo data={weatherData} /> </td>
      </tr>
    );

  }

  render(){
    return (
      <div className="container-fluid three-day-weatherListing">
        <table className="table">
          <thead>
          <tr>
            <th><h3> 3 Day weather</h3> </th>
          </tr>
          </thead>
          <tbody>
           {this.props.dataList.map(this.renderForecastes)}
          </tbody>
          </table>
      </div>
    );
  }
};

export default DayListing;
