
import React, { useState } from "react";

export default function Degrees(props) {
  const [unit, setUnit] = useState("celsius");

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
    return (
      <div className="changeDegrees">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C{" "}
        </span>
      </div>
    );
 
}
