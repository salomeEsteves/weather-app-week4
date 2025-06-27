import React, { useState } from "react"
import axios from "axios"
import WeatherForecastDay from "./WeatherForecastDay.js"
import "./Weather.css"


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null); 

    function handleResponse(response) {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
}

if (loaded) {
    return (
<div className="WeatherForecast">
    <div className="row">
        <WeatherForecastDay data={forecast[0]}/>
        </div>
        </div>
    )
    
} else {
    let apiKey = "816db46aoff47734aa762t93dbac670f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
       
    axios.get(apiUrl).then(handleResponse);

    return null;

}

    
}