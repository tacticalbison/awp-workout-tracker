import React, { useState, useEffect } from "react";

const Timer = () => {
  const startMin = 0;
  const startSec = 0;

  const [minutes, setMinutes] = useState(startMin);
  const [seconds, setSeconds] = useState(startSec);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <div>
      <h1>
        TIME LEFT: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};

export default Timer;
