import React from 'react';
import {
  UilTemperatureQuarter, UilTear, UilWind,
} from '@iconscout/react-unicons';

import DailyContentLabel from './DailyContentLabel';

function DailyContentOverview() {
  return (
    <div className="flex justify-between items-center text-white py-3">
      <img src="http://openweathermap.org/img/wn/03d@2x.png" className="w-20" alt="Weather icon" />
      <span className="text-5xl font-medium">52°</span>
      <div className="flex flex-col gap-y-1">
        <DailyContentLabel icon={<UilTemperatureQuarter />} label="Feels Like: " content="46°" />
        <DailyContentLabel icon={<UilTear />} label="Humidity: " content="50%" />
        <DailyContentLabel icon={<UilWind />} label="Wind: " content="19 mph" />
      </div>
    </div>
  );
}

export default DailyContentOverview;
