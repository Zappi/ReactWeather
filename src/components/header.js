import React from 'react';

export default(props) => {
  return (
    <div className="header">
      <h1 id="headerCityName">{props.cityName}</h1>
      <h5> {props.description} </h5>
      <h3 id="headerTemperature">{Math.round(props.temperature)} °C</h3>
    </div>
  );
}
