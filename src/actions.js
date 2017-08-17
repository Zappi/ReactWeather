import axios from 'axios';

const apikey = '9d1a5d7fd040aed65637d4dd56c39eeb';
const mainUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}`;

export function fetchWeather(city) {
  const source = `${mainUrl}&q=${city},fi`;
  const request = axios.get(source);

  console.log(request);
}
