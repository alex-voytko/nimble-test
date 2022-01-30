import shortid from "shortid";
import types from "./tracker-types";

export const add = (name) => ({
  type: types.ADD,
  payload: {
    name,
    id: shortid.generate(),
    isPausable: false,
  },
});

export const remove = (itemID) => ({
  type: types.REMOVE,
  payload: itemID,
});

export const changeStatus = (id, bool) => ({
  type: types.CHANGE_STATUS,
  payload: {
    id,
    bool,
  },
});
