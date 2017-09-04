import React from 'react';

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export default (props) => {
  console.log(props);
  let forecastDay = new Date(props.data.dt * 1000);
  //REMOVE THIS CONSOLE LOG
  console.log(forecastDay);
  console.log(forecastDay.getDay());

  return (
    <div id="dayinfo-parent">

      <div id="inline-weekday">
        <h3> {weekdays[forecastDay.getDay()]} </h3>
      </div>
      <div id="inline-forecast">
        <h4> Max: {props.data.maxTemperature-273} </h4>
        <h5> {props.data.weather} </h5>
      </div>
    </div>
  );
}
