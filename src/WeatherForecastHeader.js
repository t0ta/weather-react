import React from "react";
import "./WeatherForecastHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastHeader() {
  return (
    <div className="WeatherForecastHeader">
      <FontAwesomeIcon icon={faCalendarDays} /> 5-DAY FORECAST
    </div>
  );
}
