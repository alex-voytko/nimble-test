import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

function StopwatchString({ isPausable }) {
  let [sec, setSeconds] = useState(0);
  let [min, setMinunes] = useState(0);
  let [hour, setHours] = useState(0);

  useInterval(
    () => {
      setSeconds(sec + 1);
      if (sec === 59) {
        setMinunes(min + 1);
        setSeconds(0);
      }
      if (min >= 59) {
        setHours(hour + 1);
        setMinunes(0);
      }
    },
    !isPausable ? 1000 : null
  );
  return (
    <>
      <p
        className={
          !isPausable
            ? `list-container__item__stopwatch-time`
            : `list-container__item__stopwatch-time pausable`
        }
      >
        <span>{hour < 10 ? `0${hour}` : hour}</span>
        <span className='stopwatch-devider'>:</span>
        <span>{min < 10 ? `0${min}` : min}</span>
        <span className='stopwatch-devider'>:</span>
        <span>{sec < 10 ? `0${sec}` : sec}</span>
      </p>
    </>
  );
}

export default StopwatchString;
