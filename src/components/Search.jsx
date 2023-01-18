import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Search() {
  return (
    <div className="flex justify-center my-6">
      <div className="flex justify-center items-center w-3/4 gap-x-4 ">
        <input
          className="text-xl w-full font-light p-2 capitalize focus:outline-none shadow-xl"
          type="text"
          placeholder="Search..."
        />
        <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" />
        <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex justify-center items-center w-1/4 gap-x-2">
        <button
          className="text-white cursor-pointer text-xl font-light transition ease-out hover:scale-125"
          type="button"
        >
          °C
        </button>
        <span className="text-white text-xl">|</span>
        <button
          className="text-white cursor-pointer text-xl font-light transition ease-out hover:scale-125"
          type="button"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Search;
