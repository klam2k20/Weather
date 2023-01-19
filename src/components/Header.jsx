import React from 'react';
import PropTypes from 'prop-types';

const cities = [
  {
    id: 1,
    title: 'London',
  },
  {
    id: 2,
    title: 'Dubai',
  },
  {
    id: 3,
    title: 'Tokyo',
  },
  {
    id: 4,
    title: 'Bangkok',
  },
  {
    id: 5,
    title: 'Paris',
  },
];
function Header({ handleClick }) {
  return (
    <div className="flex justify-between items-center">
      {cities.map((city) => (
        <button
          className="text-white font-medium text-md sm:text-lg cursor-pointer"
          key={city.id}
          type="button"
          onClick={() => handleClick({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Header;
