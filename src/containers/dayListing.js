import React from 'react';

class DayListing extends React.Component {

  renderForecastes(weatherData) {

    return(
      <tr key={weatherData.dt}>
      <h2> {weatherData.dt} </h2>
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
           {this.props.dataList.slice(1,4).map(this.renderForecastes)}
          </tbody>
          </table>
      </div>
    );
  }
};

export default DayListing;
