import types from "./tracker-types";

const initialItems = [];

const itemsReducer = (state = initialItems, action) => {
  console.log(action);
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];

    case types.REMOVE:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
export default itemsReducer;
