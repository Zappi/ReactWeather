import React from 'react';

import SearchBar from "../containers/searchBar";
import WeatherInfo from "../containers/weatherInfo";

export default class App extends React.Component {

  render() {
    return(
      <div>
      <SearchBar />
      <WeatherInfo />
      </div>
    );
  }
}
