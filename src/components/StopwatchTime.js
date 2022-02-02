import React from "react";

function StopwatchTime({ className, timeSeconds, timeMinutes, timeHours }) {
  return (
    <>
      <p className={className}>
        <span>{timeHours < 10 ? `0${timeHours}` : timeHours}</span>
        <span className='stopwatch-devider'>:</span>
        <span>{timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes}</span>
        <span className='stopwatch-devider'>:</span>
        <span>{timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds}</span>
      </p>
    </>
  );
}

export default StopwatchTime;
