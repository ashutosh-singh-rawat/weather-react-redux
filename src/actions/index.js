import axios from 'axios';

const API_KEY = 'd3b729de113455776f7cc125bd9879a7';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const country_code = 'in';
  const url = `${API_URL}&q=${city},${country_code}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
