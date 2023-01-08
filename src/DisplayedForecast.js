import React from "react";
import "./DisplayedForecast.css";

export default function DisplayedForecast(props) {
  return (
    <div className="DisplayedForecast">
      <div className="row">
        <div className="col-4">
          <span className="displayed-city">{props.city}</span>
          <ul className="displayed-date">
            <li>{props.date}</li>
            <li>{props.description}</li>
          </ul>
        </div>
        <div className="col-sm-2 displayed-icon img-fluid">
          <img src={props.imgUrl} alt={props.description} />
        </div>
        <div className="col-sm-3 displayed-temperature">
          {props.temperature}
          <span className="units">
            <a href="/" className="active unit-style">
              °C
            </a>{" "}
            |
            <a href="/" className="unit-style">
              F°
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
