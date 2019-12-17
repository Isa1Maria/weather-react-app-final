import React from "react";
import RightDate from "./RightDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
          <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                    <div className="float-left">
                    <WeatherIcon code ={props.data.icon} />
               </div>
              
                <div className="float-left">
                    <TemperatureConversion celsius={props.data.temperature} />
            </div>
            
            </div>
            </div>
            <ul>
            <li>
                <RightDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
      
            <div className="col-6">
                <ul>
        
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>

            </div>

        </div>
        </div>
        );
}