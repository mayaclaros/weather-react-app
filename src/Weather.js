import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/10d@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9f6856ebe6ff8e06323dffff3e988e4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <h4>
          The weather characteristics for {city} today is{" "}
          <i> {weather.description} </i>
        </h4>
        <p> Temperature: {Math.round(weather.temperature)}°C</p>
        <p> Wind: {weather.wind} km/h</p>
        <p> Humidity: {weather.humidity}%</p>
        <img src={weather.icon} alt="weather icon" />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            value={city}
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      
       <footer>
        <p>
          {" "}
          This project was coded with 💜 by
          <a href="https://www.justmeomaya.com">Maya Claros</a>
          and is open sourced on
          <a href="https://github.com/mayaclaros/mc-lyte">GitHub</a>
          and hosted by
          <a href="https://mclyte.netlify.app/">Netlify</a>
        </p>
      </footer>
    );
  }
}
