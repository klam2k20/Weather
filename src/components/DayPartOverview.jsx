import React from 'react';
import PropTypes from 'prop-types';
import {
  UilSun, UilSunset,
} from '@iconscout/react-unicons';

import DailyContentLabel from './DailyContentLabel';

function DayPartOverview({
  content: {
    sunriseTime, sunsetTime, max, min,
  },
}) {
  return (
    <div className="flex justify-center items-center text-white sm:gap-x-2 gap-x-1">
      <DailyContentLabel icon={<UilSun />} label="Rise: " content={sunriseTime} />
      <span className="font-light">|</span>
      <DailyContentLabel icon={<UilSunset />} label="Set: " content={sunsetTime} />
      <span className="font-light">|</span>
      <DailyContentLabel label="H: " content={`${max.toFixed(0)}°`} />
      <span className="font-light">|</span>
      <DailyContentLabel label="L: " content={`${min.toFixed(0)}°`} />
    </div>
  );
}

DayPartOverview.propTypes = {
  content: PropTypes.shape({
    sunriseTime: PropTypes.string.isRequired,
    sunsetTime: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

export default DayPartOverview;
