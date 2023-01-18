import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Datetime from './components/Datetime';
import Location from './components/Location';
import DailyContent from './components/DailyContent';

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
      <div className="max-w-screen-md h-fit mx-auto py-4 px-32 bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-grey-500">
        <Header cities={cities} />
        <Search />
        <Datetime />
        <Location />
        <DailyContent />
      </div>
    </div>
  );
}

export default App;
