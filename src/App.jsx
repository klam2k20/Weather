import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Datetime from './components/Datetime';
import Location from './components/Location';
import DailyContent from './components/DailyContent';
import ForcastOverview from './components/ForcastOverview';
import getWeatherData from './services/weather';

function App() {
  const [query, setQuery] = useState({
    lat: 40.650002,
    lon: -73.949997,
  });
  const [units, setUnits] = useState('imperial');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData({ ...query, units })
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  }, [query, units]);

  const backgroundColor = () => {
    const coolBackground = 'bg-gradient-to-br from-cyan-500 to-blue-500';
    const hotBackground = 'bg-gradient-to-br from-orange-500 to-red-500';
    if (weatherData) {
      if (units === 'imperial') {
        return weatherData.temp > 60 ? hotBackground : coolBackground;
      }
      return weatherData.temp > 20 ? hotBackground : coolBackground;
    }
    return coolBackground;
  };
  /**
     * TODO: Add toasts
    */
  return (
    <div className="App">
      <div className={`${backgroundColor()} shadow-xl shadow-grey-500`}>
        <div className="flex flex-col gap-y-6 xl:max-w-screen-lg h-screen mx-auto py-8 px-4 md:px-8">
          <Header handleClick={setQuery} />
          <Search handleQuery={setQuery} units={units} handleUnits={setUnits} />
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
