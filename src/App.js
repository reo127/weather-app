import { useState } from 'react';
import Home from './Components/Home';
import './input.css'





function App() {
  const [weatherData, setweatherData] = useState({})
  
  // Get Weather Data
  const getWeather = async(city) => {
    if(city === ""){
      alert('place enter city name');
      return;
    }
     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then((jsonData) =>setweatherData( jsonData ))
    .catch( err => console.log(err))
  }


  return (
    <div className="App">
        <Home getWeather={getWeather} weatherData={weatherData} />
    </div>
  );
}

export default App;
