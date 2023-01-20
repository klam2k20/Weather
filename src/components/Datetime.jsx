import React from 'react';
import PropTypes from 'prop-types';

function Datetime({ content: { date, time } }) {
  return (
    <div className="flex justify-center flex-wrap gap-x-1 text-white font-extralight text-xl">
      <span>{date}</span>
      <span>{`Local Time: ${time}`}</span>
    </div>
  );
}

Datetime.propTypes = {
  content: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Datetime;
