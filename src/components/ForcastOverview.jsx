import React from 'react';
import PropTypes from 'prop-types';

import ForcastItem from './ForcastItem';
import { getIcon } from '../services/weather';

function ForcastOverview({ title, forcast }) {
  return (
    <div className="flex flex-col text-white gap-y-2">
      <span className="flex justify-start text-xl font-medium uppercase">{title}</span>
      <hr />
      <div className="flex items-center justify-between">
        {
          forcast.map((item) => (
            <ForcastItem key={item.time} datetime={item.time} img={getIcon(item.icon)} temp={`${item.temp.toFixed(0)}°`} />
          ))
        }
      </div>
    </div>
  );
}

ForcastOverview.propTypes = {
  title: PropTypes.string.isRequired,
  forcast: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default ForcastOverview;
