import React from 'react';

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export default (props) => {
    console.log(props);
    let forecastDay = new Date(props.data.dt * 1000);

    return (
      <td>
      <div id ="dayinfo-parent">

        <div id="forecast-dayInfo">
          <span id="weekday-inline">
            <h2 > { weekdays[forecastDay.getDay()] } </h2>
          </span>
          <span id="temperature-inline">
            <h4 > Min: { parseInt(props.data.minTemperature - 273)} °C </h4>
            <h4> Max: { parseInt(props.data.maxTemperature - 273)} °C </h4>
          </span>
          <span id="forecast-inline">
            <h3> { props.data.weather } </h3>
          </span>
        </div>
      </div>
      </td>
    );
}
