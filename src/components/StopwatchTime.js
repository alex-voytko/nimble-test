import React from "react";

function StopwatchTime({ isPausable, timeSeconds, timeMinutes, timeHours }) {
  return (
    <>
      <p
        className={
          !isPausable
            ? `list-container__item__stopwatch-time`
            : `list-container__item__stopwatch-time pausable`
        }
      >
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
