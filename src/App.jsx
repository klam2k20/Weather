import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Datetime from './components/Datetime';
import Location from './components/Location';
import DailyContent from './components/DailyContent';
import ForcastOverview from './components/ForcastOverview';
import getWeatherData from './services/weather';

function App() {
  const [query] = useState({
    lat: 40.650002,
    lon: -73.949997,
  });
  const [units] = useState('imperial');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData({ ...query, units })
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  }, [query, units]);

  return (
  /**
     * TODO: Update background gradient depending on temp
     * TODO: Update input
     *  TODO: Input on icon click and on enter
     *  TODO: Using location
     * TODO: Update select buttons
     * TODO: Update selecting units
    */

    <div className="App">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-grey-500">
        <div className="flex flex-col gap-y-6 xl:max-w-screen-lg h-screen mx-auto py-8 px-4 md:px-8">
          <Header />
          <Search />
          {weatherData && (
          <>
            <Datetime content={weatherData} />
            <Location content={weatherData} />
            <DailyContent content={weatherData} units={units} />
            <ForcastOverview title="Hourly Forcast" forcast={weatherData.hourlyForcast} />
            <ForcastOverview title="Daily Forcast" forcast={weatherData.dailyForcast} />
          </>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;
