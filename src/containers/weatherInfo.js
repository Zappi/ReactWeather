import React from 'react';
import { connect } from 'react-redux';

class WeatherInfo extends React.Component {


  showWeather(data) {
    console.log(data);
    return (

      <h3 key={data.city.name}> {data.city.name} and temperature {data.list[0].main.temp} Kelvins</h3>
    );
  }

  render() {
    return (
      <div>
        <h1> Name </h1>
        <section>
        {this.props.weatherFetcher.map(this.showWeather)}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherFetcher: state.weatherFetcher
  };
}

export default connect(mapStateToProps)(WeatherInfo);
