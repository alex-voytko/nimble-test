import shortid from "shortid";
import types from "./tracker-types";

export const add = (name) => ({
  type: types.ADD,
  payload: {
    name,
    id: shortid.generate(),
    stopwatch: {
      isPaused: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
  },
});
export const remove = (itemID) => ({
  type: types.REMOVE,
  payload: itemID,
});
