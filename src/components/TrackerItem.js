import { useInterval } from "usehooks-ts";
import { useDispatch } from "react-redux";
import {
  addTime,
  changeStopwatchStatus,
  removeStopwatch,
} from "../redux/tracker-redux/tracker-slice";
import StopwatchName from "./StopwatchName";
import StopwatchTime from "./StopwatchTime";
import Button from "./Button";

function TrackerItem({
  name,
  isPausable,
  id,
  timeSeconds,
  timeMinutes,
  timeHours,
}) {
  const dispatch = useDispatch();

  useInterval(
    () => {
      dispatch(addTime(id));
    },
    !isPausable ? 1000 : null
  );
  return (
    <>
      <li
        className={
          !isPausable ? `list-container__item` : `list-container__item pausable`
        }
        key={id}
      >
        <StopwatchName name={name} isPausable={isPausable} />

        <div>
          <StopwatchTime
            isPausable={isPausable}
            timeSeconds={timeSeconds}
            timeMinutes={timeMinutes}
            timeHours={timeHours}
          />
          <Button
            className={
              !isPausable
                ? `list-container__item__pause-btn`
                : `list-container__item__pause-btn resume`
            }
            type='button'
            onClick={() => dispatch(changeStopwatchStatus(id))}
          />
          <Button
            className='list-container__item__remove-btn'
            type='button'
            onClick={() => dispatch(removeStopwatch(id))}
          />
        </div>
      </li>
    </>
  );
}
export default TrackerItem;
