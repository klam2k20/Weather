import React from 'react';
import PropTypes from 'prop-types';
import {
  UilTemperatureQuarter, UilTear, UilWind,
} from '@iconscout/react-unicons';

import DailyContentLabel from './DailyContentLabel';
import { getIcon } from '../services/weather';

function DailyContentOverview({
  content: {
    icon, temp, feels_like, humidity, wind_speed, units,
  },
}) {
  return (
    <div className="flex justify-between items-center text-white py-3">
      <img src={getIcon(icon)} className="w-20" alt="Weather icon" />
      <span className="text-5xl font-medium">{`${temp.toFixed(0)}°`}</span>
      <div className="flex flex-col gap-y-1">
        <DailyContentLabel icon={<UilTemperatureQuarter />} label="Feels Like: " content={`${feels_like.toFixed(0)}°`} />
        <DailyContentLabel icon={<UilTear />} label="Humidity: " content={`${humidity}%`} />
        <DailyContentLabel icon={<UilWind />} label="Wind: " content={`${wind_speed.toFixed(0)} ${units === 'imperial' ? 'mph' : 'km/h'}`} />
      </div>
    </div>
  );
}

DailyContentOverview.propTypes = {
  content: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired,
  }).isRequired,
};

export default DailyContentOverview;
