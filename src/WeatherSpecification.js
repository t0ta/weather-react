import React from "react";
import "./WeatherSpecification.css";

export default function WeatherSpecification(props) {
  return (
    <div className="WeatherSpecification">
      <div className="row">
        <div className="col-6 displayed-weather-specification"></div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i>
              Humidity
              <div>{props.humidity}%</div>
            </li>
          </ul>
        </div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <i className="fa-solid fa-temperature-half"></i>
              Feles like
              <div>{props.feelsLike}°C</div>
            </li>
          </ul>
        </div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <i className="fa-solid fa-wind"></i> Wind
              <div>{props.wind} kmh</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
