import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleEnd = () => {
    setIsActive(false);
  };

  const StartButton = (
    <div classname="btn btn-one btn-start" onClick={handleStart}>
      Start Workout
    </div>
  );
  const ActiveButtons = (
    <div className="btn-group">
      <div className="btn btn-one" onClick={handlePause}>
        {isPaused ? "Resume" : "Pause"}
      </div>
      <div className="btn-two" onClick={handleEnd}>
        End Workout
      </div>
    </div>
  );

  return (
    <div className="Stopwatch">
      <div className="timer">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
        {/* <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span> */}
      </div>
      <div className="Control-Buttons">
        <div>{isActive ? ActiveButtons : StartButton}</div>
      </div>
    </div>
  );
}

export default Stopwatch;
