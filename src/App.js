import React from "react";
import Form from "./Form";
import Cities from "./Cities";
import DisplayedForecast from "./DisplayedForecast";
import WeatherSpecification from "./WeatherSpecification";
import WeatherForecastHeader from "./WeatherForecastHeader";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  let weatherData = {
    city: "Lisbon",
    temperature: 20,
    date: "Sunday 21:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 5,
    feelsLike: 18,
  };
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Form />
          <Cities />
          <DisplayedForecast
            city={weatherData.city}
            temperature={weatherData.temperature}
            date={weatherData.date}
            description={weatherData.description}
            imgUrl={weatherData.imgUrl}
          />
          <WeatherSpecification
            humidity={weatherData.humidity}
            wind={weatherData.wind}
            feelsLike={weatherData.feelsLike}
          />
          <hr />
          <WeatherForecastHeader />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
