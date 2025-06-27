import React from "react"
import WeatherIcon from "./WeatherIcon"
import "./Weather.css"

export default function WeatherForecast() {
    return (
        <div className="Daily">
            <h4 className="Day">Sat</h4>
            <WeatherIcon code={"clear-sky-day"} size={45} />
            <div className="temperatures">
            <span className="temperature-max"> 20º </span> | <span className="temperature-min">12º</span>
            </div>
        </div>
    )
}