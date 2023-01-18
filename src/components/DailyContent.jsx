import React from 'react';
import DailyContentOverview from './DailyContentOverview';
import DailyPartOverview from './DayPartOverview';

function DailyContent() {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-xl text-cyan-300">Clouds</span>
      <DailyContentOverview />
      <DailyPartOverview />
    </div>
  );
}

export default DailyContent;
