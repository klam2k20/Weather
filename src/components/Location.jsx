import React from 'react';
import PropTypes from 'prop-types';

function Location({ content: { name, country } }) {
  return (
    <div className="flex justify-center text-white text-3xl font-medium">
      {`${name}, ${country}`}
    </div>
  );
}

Location.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default Location;
