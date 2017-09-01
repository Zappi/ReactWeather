import React from 'react';

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default (props) => {

  const forecastDay = new Date(props.data.dt * 1000);
  console.log(forecastDay.getDay());

  return (
    <div id="dayinfo-parent">
    <div id="inline-weekday">
      <h3> {weekdays[forecastDay.getDay()]} </h3>
    </div>
    <div id="inline-forecast">

    </div>
    </div>
  );
}
