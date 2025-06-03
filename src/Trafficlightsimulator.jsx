import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState("red");
//the sequence of light changes
  useEffect(() => {
    const sequence = ["red", "yellow", "green"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setActiveLight(sequence[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
//style 
  return (
    <div className="tls-container">
      <style>{`
        .tls-container {
          min-height: 100vh;
          background: #232323;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .tls-title {
          color: #fff;
          font-size: 1.5rem;
          margin-bottom: 32px;
          font-family: sans-serif;
          letter-spacing: 1px;
          text-align: center;
        }
        .traffic-light {
          background: #2d2d2d;
          border-radius: 24px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .light {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #444;
          opacity: 0.3;
          box-shadow: 0 0 0 0 rgba(0,0,0,0);
          transition: 
            background 0.3s,
            opacity 0.3s,
            box-shadow 0.3s;
          margin: 0 auto;
        }
        .light.red.active {
          background: #ff3b3b;
          opacity: 1;
          box-shadow: 0 0 32px 8px #ff3b3b88;
        }
        .light.yellow.active {
          background: #ffe347;
          opacity: 1;
          box-shadow: 0 0 32px 8px #ffe34788;
        }
        .light.green.active {
          background: #5cff5c;
          opacity: 1;
          box-shadow: 0 0 32px 8px #5cff5c88;
        }
      `}</style>
      <div className="tls-title">Traffic Light Simulator</div>
      <div className="traffic-light">
        <div className={`light red${activeLight === "red" ? " active" : ""}`}></div>
        <div className={`light yellow${activeLight === "yellow" ? " active" : ""}`}></div>
        <div className={`light green${activeLight === "green" ? " active" : ""}`}></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;