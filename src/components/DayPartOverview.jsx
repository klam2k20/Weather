import React from 'react';
import {
  UilSun, UilSunset,
} from '@iconscout/react-unicons';

import DailyContentLabel from './DailyContentLabel';

function DayPartOverview() {
  return (
    <div className="flex justify-center items-center text-white gap-x-2">
      <DailyContentLabel icon={<UilSun />} label="Rise: " content="7:16 AM" />
      <span className="font-light">|</span>
      <DailyContentLabel icon={<UilSunset />} label="Set: " content="4:55 PM" />
      <span className="font-light">|</span>
      <DailyContentLabel label="H: " content="53°" />
      <span className="font-light">|</span>
      <DailyContentLabel label="L: " content="40°" />
    </div>
  );
}

export default DayPartOverview;
