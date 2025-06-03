import React, { useState, useEffect } from "react";
import "./TrafficLightSimulator.css";

//light logic
const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const sequence = ["red", "yellow", "green"];
    let index = 0;

// time for track for 3 seconds
    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setActiveLight(sequence[index]);
    }, 3000);


  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`}></div>
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
      <div className={`light green ${activeLight === "green" ? "active" : ""}`}></div>
    </div>
  );
});


export default TrafficLightSimulator;
