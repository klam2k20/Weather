import React from 'react';
import PropTypes from 'prop-types';
import DailyContentOverview from './DailyContentOverview';
import DailyPartOverview from './DayPartOverview';

function DailyContent({
  content: {
    main, icon, temp, feels_like, humidity, wind_speed, sunriseTime, sunsetTime, max, min,
  }, units,
}) {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-xl text-center text-white">{main}</span>
      <DailyContentOverview content={{
        icon, temp, feels_like, humidity, wind_speed, units,
      }}
      />
      <DailyPartOverview content={{
        sunriseTime, sunsetTime, max, min,
      }}
      />
    </div>
  );
}

DailyContent.propTypes = {
  content: PropTypes.shape({
    main: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    sunriseTime: PropTypes.string.isRequired,
    sunsetTime: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
  units: PropTypes.string.isRequired,
};

export default DailyContent;
