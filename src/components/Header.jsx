import React from 'react';
import PropTypes from 'prop-types';

function Header({ cities }) {
  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((city) => (
        <button
          className="text-white font-medium text-lg"
          key={city.id}
          type="button"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

Header.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
