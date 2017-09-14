import React from 'react';
import DayInfo from '../components/dayInfo';

class DayListing extends React.Component {

  //PROBABLY SHOULD MOVE ALL JS THESE FUNCTIONS IN A SEPERATE FILE

  //Searchs the maxium and minium temperature of the day, returns an object containing the day, and min and max temp.
  filterSameDays(dataList) {

    var maxTemp = Number.MIN_SAFE_INTEGER;
    var minTemp = Number.MAX_SAFE_INTEGER;
    let d = new Date(dataList[0]*1000).toDateString();
    var forecastDays = [];
    //32 is the maxium amount of forecasts for 4 days from opeanweather api
    //STILL GIVES IN SOME SITUATIONS THE 4TH DAY FORECAST FIX THIS!!!
    for(var i = 0; i < 31; i++) {
      if(this.daySameAsToday(dataList[i])) {
        continue;
      }

      if(minTemp > dataList[i].main.temp_min) {
        minTemp = dataList[i].main.temp_min;
      }
      if (maxTemp < dataList[i].main.temp_max) {
        maxTemp = dataList[i].main.temp_max;
      }

      if(new Date(dataList[i].dt*1000).toDateString() != d && !this.daySameAsToday(dataList[i])) {
        forecastDays.push({dt: dataList[i].dt, weather: dataList[i].weather[0].main, maxTemperature: maxTemp, minTemperature: minTemp});
        d = new Date(dataList[i].dt*1000).toDateString();
        console.log(new Date(dataList[i].dt*1000).toDateString());
        this.resetTemperatures();
      }
    }

    return forecastDays.map(this.renderForecasts);

  }

  resetTemperatures() {
    this.maxTemp = Number.MIN_SAFE_INTEGER;
    this.minTemp = Number.MAX_SAFE_INTEGER;
  }

  daySameAsToday(dataDate) {
    var now = new Date();
    if(new Date(dataDate.dt*1000).toDateString() == now.toDateString()) {
      return true;
    }
    return false;
  }

  renderForecasts(weatherData) {
    return(
      <tr key={weatherData.dt}>
      <DayInfo data={weatherData} />
      </tr>
    );

  }

  render(){
    return (
      <div className="container-fluid three-day-weatherListing">
        <table className="table">
          <thead>
            <tr>
              <th><h3>3 Day Weather Forecast</h3></th>
            </tr>
          </thead>
          <tbody>
          {this.filterSameDays(this.props.dataList)}
          </tbody>
        </table>
      </div>
    );
  }
};

export default DayListing;
