import React from "react";
import "./WeatherSpecification.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function WeatherSpecification(props) {
  return (
    <div className="WeatherSpecification">
      <div className="row">
        <div className="col-6 displayed-weather-specification"></div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <FontAwesomeIcon icon={faDroplet} /> Humidity
              <div>{props.humidity}%</div>
            </li>
          </ul>
        </div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <FontAwesomeIcon icon={faTemperatureHalf} /> Feles like
              <div>{props.feelsLike}°C</div>
            </li>
          </ul>
        </div>
        <div className="col-2 displayed-weather-specification">
          <ul>
            <li>
              <FontAwesomeIcon icon={faWind} /> Wind
              <div>{props.wind} kmh</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
