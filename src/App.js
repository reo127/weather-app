import { useState } from 'react';
import Home from './Components/Home';
import WeatherState from './context/WeatherProvider';
import './input.css'




function App() {
  const [weatherData, setweatherData] = useState({})
  
  // Get Weather Data
  const getWeather = async(city) => {
    if(city === ""){
      alert('place enter city name');
      return;
    }
     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70509c7705d7b3fcb4f99bd7ad6378ab`)
    .then((response) => response.json())
    .then((jsonData) =>setweatherData( jsonData ))
    .catch( err => console.log(err))
  }


  return (
    <div className="App">
      <WeatherState>
        <Home getWeather={getWeather} weatherData={weatherData} />
      </WeatherState>
    </div>
  );
}

export default App;
