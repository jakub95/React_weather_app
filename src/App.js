import React, { useState, useEffect } from "react";
import "./App.css";

//components
import Hero from "./components/Hero";

const App = () => {
  const apiKey = "ea4013c5ee6f7357c4a38fa1b46a4c23";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="my-10 py-12  rounded-lg m-auto max-w-4xl h-96 bg-main-bg bg-cover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="flex flex-col m-5">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            type="text"
            className="border-2 border-black p-2 w-2/5 m-auto rounded-md"
            placeholder="Enter City"
          />
          {typeof weatherData.main === "undefined" ? (
            <div className="rounded-md">
              <p className="mt-4 text-center font-bold text-2xl">
                Welcome to weather app! Enter in a city to get weather
              </p>
            </div>
          ) : (
            <div
             className={
               (typeof weatherData.main != 'undefined') ? 
               (weatherData.weather[0].main === 'Clouds') ? 'bg-clouds bg-green-500 rounded-md overflow-hidden text-center w-80 py-8 m-auto my-10 shadow-md'
               :(weatherData.weather[0].main === 'Rain') ? 'bg-rain bg-green-500 rounded-md overflow-hidden text-center w-80 py-8 m-auto my-10 shadow-md' 
               :(weatherData.weather[0].main === 'Clear') ? 'bg-clear bg-green-500 rounded-md overflow-hidden text-center w-80 py-8 m-auto my-10 shadow-md'
               :'bg-sunny bg-green-500 rounded-md overflow-hidden text-center w-80 py-8 m-auto my-10 shadow-md' : 'bg-sunny bg-green-500 rounded-md overflow-hidden text-center w-80 py-8 m-auto my-10 shadow-md'
             }
            >
              <div>
                <p className="font-bold">{weatherData.name}</p>
                <p>{Math.round(weatherData.main.temp)} &#8451;</p>
                <p className="font-mono">{weatherData.weather[0].main}</p>
              </div>
            </div>
          )}
          {weatherData.cod === "404" ? <p className='text-center'>City not foud</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default App;
