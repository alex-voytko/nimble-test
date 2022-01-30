import React from "react";
import StopwatchString from "./StopwatchString";
import Button from "./Button";
import { connect } from "react-redux";
import * as actions from "../redux/tracker-redux/tracker-actions";

function TrackerList({ stopwatches, onChangeStatus, onRemove }) {
  return (
    stopwatches.length >= 1 && (
      <div className='list-container'>
        <ul>
          {stopwatches.map(({ name, id, isPausable }) => (
            <li
              className={
                !isPausable
                  ? `list-container__item`
                  : `list-container__item pausable`
              }
              key={id}
            >
              <p className='list-container__item__stopwatch-name'>
                <span
                  className={
                    !isPausable
                      ? `list-container__item__stopwatch-name vertical-align`
                      : `list-container__item__stopwatch-name vertical-align pausable`
                  }
                >
                  {name}
                </span>
              </p>
              <div>
                <StopwatchString isPausable={isPausable} />
                <Button
                  className={
                    !isPausable
                      ? `list-container__item__pause-btn`
                      : `list-container__item__pause-btn resume`
                  }
                  type='button'
                  onClick={() => onChangeStatus(id, isPausable)}
                />
                <Button
                  className='list-container__item__remove-btn'
                  type='button'
                  onClick={() => onRemove(id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  stopwatches: state.stopwatches,
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(actions.remove(id)),
  onChangeStatus: (id, bool) => dispatch(actions.changeStatus(id, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerList);
