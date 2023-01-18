import React from 'react';
import PropTypes from 'prop-types';

import ForcastItem from './ForcastItem';

function ForcastOverview({ title }) {
  return (
    <div className="flex flex-col text-white gap-y-2">
      <span className="flex justify-start text-xl font-medium uppercase">{title}</span>
      <hr />
      <div className="flex items-center justify-between">
        <ForcastItem datetime="Now" img="http://openweathermap.org/img/wn/03d@2x.png" temp="51°" />
        <ForcastItem datetime="3:00 PM" img="http://openweathermap.org/img/wn/03d@2x.png" temp="50°" />
        <ForcastItem datetime="4:00 PM" img="http://openweathermap.org/img/wn/03d@2x.png" temp="49°" />
        <ForcastItem datetime="5:00 PM" img="http://openweathermap.org/img/wn/03d@2x.png" temp="48°" />
        <ForcastItem datetime="6:00 PM" img="http://openweathermap.org/img/wn/03d@2x.png" temp="48°" />
      </div>

    </div>
  );
}

ForcastOverview.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ForcastOverview;
