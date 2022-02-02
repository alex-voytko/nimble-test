import React from "react";
import { connect } from "react-redux";
import TrackerItem from "./TrackerItem";

function TrackerList({ stopwatches }) {
  return (
    stopwatches.length >= 1 && (
      <div className='list-container'>
        <ul>
          {stopwatches.map((item) => (
            <TrackerItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  stopwatches: state.stopwatches.items,
});

export default connect(mapStateToProps, null)(TrackerList);
