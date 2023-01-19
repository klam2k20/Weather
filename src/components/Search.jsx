import React from 'react';
import PropTypes from 'prop-types';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Search({ handleQuery, units, handleUnits }) {
  const [search, setSearch] = React.useState('');

  const submitForm = (e) => {
    e.preventDefault();
    handleQuery({ q: search });
    setSearch('');
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      handleQuery({
        lat,
        lon,
      });
    });
  };

  const updateUnits = (e) => {
    if (e.target.value !== units) {
      const newUnits = e.target.value === 'metric' ? 'metric' : 'imperial';
      handleUnits(newUnits);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex justify-center items-center w-3/4 gap-x-4" onSubmit={submitForm}>
        <input
          className="text-xl w-full font-light p-2 capitalize focus:outline-none shadow-xl"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" />
        </button>
        <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocation} />
      </form>
      <div className="flex justify-end items-center w-1/4 gap-x-2">
        <button
          className="text-white cursor-pointer text-xl font-light transition ease-out hover:scale-125"
          type="button"
          value="metric"
          onClick={updateUnits}
        >
          °C
        </button>
        <span className="text-white text-xl">|</span>
        <button
          className="text-white cursor-pointer text-xl font-light transition ease-out hover:scale-125"
          type="button"
          value="imperial"
          onClick={updateUnits}
        >
          °F
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
  handleUnits: PropTypes.func.isRequired,
};

export default Search;
