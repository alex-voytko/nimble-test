import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const trackerSlice = createSlice({
  name: "stopwatches",
  initialState: {
    items: [],
  },
  reducers: {
    addStopwatch(state, action) {
      state.items.unshift({
        id: shortid.generate(),
        name: action.payload,
        isPausable: false,
        timeSeconds: 0,
        timeMinutes: 0,
        timeHours: 0,
      });
    },
    removeStopwatch(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeStopwatchStatus(state, action) {
      const changedStatus = state.items.find(
        (item) => item.id === action.payload
      );
      changedStatus.isPausable = !changedStatus.isPausable;
    },
    addTime(state, action) {
      const foundedItem = state.items.find(
        (item) => item.id === action.payload
      );
      foundedItem.timeSeconds += 1;
      if (foundedItem.timeSeconds === 60) {
        foundedItem.timeMinutes += 1;
        foundedItem.timeSeconds = 0;
      }
      if (foundedItem.timeMinutes === 60) {
        foundedItem.timeHours += 1;
        foundedItem.timeMinutes = 0;
      }
    },
  },
});

export const { addStopwatch, removeStopwatch, changeStopwatchStatus, addTime } =
  trackerSlice.actions;

export default trackerSlice.reducer;
