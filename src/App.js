import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
            <Weather defaultCity="Porto"/>
            <footer>
                This project was coded by Isabel Marques and is {" "}
        <a href="https://github.com/Isa1Maria/weather-react-app-final"
        target="_blank"
        rel="noopener noreferrer">
open-sourced
        </a>
        </footer>
        </div>
        </div>
    )
}