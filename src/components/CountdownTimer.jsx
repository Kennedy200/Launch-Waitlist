import React, { useState, useEffect } from "react";
import "./Countdown.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-01T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft()); // Update the countdown timer
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [timeLeft]);

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">We're launching soon!</h1>
      <div className="countdown">
        {Object.keys(timeLeft).map((interval, i) => (
          <div key={i} className="countdown-item">
            <div className="countdown-number-wrapper">
              <span className="countdown-number">{timeLeft[interval] || "00"}</span>
              <div className="flip-animation"></div>
            </div>
            <span className="countdown-label">
              {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </span>
            <div className="countdown-progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(timeLeft[interval] / (interval === "days" ? 365 : 60)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
