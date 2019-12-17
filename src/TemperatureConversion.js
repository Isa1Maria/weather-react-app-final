import React, {useState} from "react";

export default function TemperatureConversion(props){
    const [unit, setUnit] = useState("celsius");
    function convertFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
    }

function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
}

if (unit === "celsius") {
 return (
     <div className="TemperatureConversion"> 
    <span className="temperature">
        {Math.round(props.celsius)}</span>
 <span className="unit">ºC | {" "} <a href= "/" onClick={convertFahrenheit}> ºF </a> 
 </span>
</div>
 );
} else {
    return (
        <div className="TemperatureConversion"> 
    <span className="temperature">
        {Math.round(fahrenheit())}</span>
 <span className="unit">< a href= "/" onClick={convertCelsius}> ºC </a>{" "} | ºF 
 </span>
</div>
    )
}
}