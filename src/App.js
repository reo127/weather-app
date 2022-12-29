import Home from './Components/Home';
import WeatherState from './context/weatherProvider';
import './input.css'




function App() {
  return (
    <div className="App">
      <WeatherState>
        <Home />
      </WeatherState>
    </div>
  );
}

export default App;
