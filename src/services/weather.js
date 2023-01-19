import { DateTime } from 'luxon';

import config from '../.config';

const API_KEY = config.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/';

const getLocation = (data) => {
  const {
    coord: { lon, lat },
    sys: { country },
    name,
  } = data;
  return {
    lat, lon, country, name,
  };
};

const getIcon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatEpochTime = (
  epochTime,
  timezone,
  format,
) => DateTime.fromSeconds(epochTime).setZone(timezone).toFormat(format);

const formatWeatherData = (data) => {
  const {
    timezone, current, hourly, daily,
  } = data;
  const {
    dt, sunrise, sunset, temp, feels_like, humidity, wind_speed, weather,
  } = current;
  const date = formatEpochTime(dt, timezone, 'cccc, LLL dd, yyyy');
  const time = formatEpochTime(dt, timezone, 't');
  const sunriseTime = formatEpochTime(sunrise, timezone, 't');
  const sunsetTime = formatEpochTime(sunset, timezone, 't');
  const { main, icon } = weather[0];
  const hourlyForcast = hourly.slice(1, 6).map((hour) => ({
    time: formatEpochTime(hour.dt, timezone, 't'),
    temp: hour.temp,
    icon: weather[0].icon,
  }));
  const { temp: { min, max } } = daily[0];
  const dailyForcast = daily.slice(1, 6).map((day) => ({
    time: formatEpochTime(day.dt, timezone, 'ccc'),
    temp: day.temp.day,
    icon: weather[0].icon,
  }));
  return {
    timezone,
    date,
    time,
    main,
    icon,
    temp,
    feels_like,
    humidity,
    wind_speed,
    sunriseTime,
    sunsetTime,
    min,
    max,
    hourlyForcast,
    dailyForcast,
  };
};

// TODO: Add status code check if its 429 api limit reached for the day
const getData = (type, searchParams) => {
  const path = type === 'weather' ? '2.5/weather' : '3.0/onecall';
  const url = new URL(BASE_URL + path);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((data) => data.json());
};

const getWeatherData = async (searchParams) => {
  const location = await getData('weather', searchParams).then(getLocation);
  const { lat, lon } = location;
  const weather = await getData('onecall', {
    lat,
    lon,
    exclude: 'minutely,alerts',
    units: searchParams.units,
    appid: API_KEY,
  }).then(formatWeatherData);
  return { ...location, ...weather };
};

export default getWeatherData;
export { getIcon };
