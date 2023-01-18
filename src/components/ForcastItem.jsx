import React from 'react';
import PropTypes from 'prop-types';

function ForcastItem({ datetime, img, temp }) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <span className="text-sm font-light text-white">{datetime}</span>
      <img src={img} className="w-10" alt="Weather icon" />
      <span className="text-sm font-light text-white">{temp}</span>
    </div>
  );
}

ForcastItem.propTypes = {
  datetime: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
};

export default ForcastItem;
