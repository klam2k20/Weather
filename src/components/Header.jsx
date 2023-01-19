import React from 'react';

const cities = [
  {
    id: 1,
    title: 'London',
  },
  {
    id: 2,
    title: 'Sydney',
  },
  {
    id: 3,
    title: 'Tokyo',
  },
  {
    id: 4,
    title: 'Toronto',
  },
  {
    id: 5,
    title: 'Paris',
  },
];
function Header() {
  return (
    <div className="flex justify-between items-center">
      {cities.map((city) => (
        <button
          className="text-white font-medium text-md sm:text-lg cursor-pointer"
          key={city.id}
          type="button"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Header;
