import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Datetime from './components/Datetime';
import Location from './components/Location';
import DailyContent from './components/DailyContent';
import ForcastOverview from './components/ForcastOverview';

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

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-grey-500">
        <div className="flex flex-col gap-y-6 xl:max-w-screen-lg h-screen mx-auto py-8 px-4 md:px-8">
          <Header cities={cities} />
          <Search />
          <Datetime />
          <Location />
          <DailyContent />
          <ForcastOverview title="Hourly Forcast" />
          <ForcastOverview title="Daily Forcast" />
        </div>

      </div>
    </div>
  );
}

export default App;
