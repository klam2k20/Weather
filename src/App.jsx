import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
    const msg = query.q ? query.q : 'Current Location';
    const fetchData = async () => {
      await getWeatherData({ ...query, units }).then((data) => {
        setWeatherData(data);
      });
    };
    const promise = fetchData();
    toast.promise(promise, {
      loading: `Fetching Weather For ${msg}`,
      success: `Successfully Fetched Weather For ${msg}`,
      error: `Failed to Fetch Weather for ${msg}`,
    });
  }, [query, units]);

  const backgroundColor = () => {
    const coolBackground = 'bg-gradient-to-br from-cyan-500 to-blue-500';
    const hotBackground = 'bg-gradient-to-br from-orange-500 to-red-500';
    const threshold = units === 'imperial' ? 60 : 20;
    if (weatherData) {
      return weatherData.temp > threshold ? hotBackground : coolBackground;
    }
    return coolBackground;
  };
  /**
     * TODO: Add error handling
     * TODO: Try to fix the lag after updating units
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </div>
  );
}

export default App;
