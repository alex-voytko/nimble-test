import types from "./tracker-types";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [action.payload, ...state];

    case types.REMOVE:
      return state.filter((item) => item.id !== action.payload);

    case types.CHANGE_STATUS:
      const foundedElement = state.find(
        (item) => item.id === action.payload.id
      );
      foundedElement.isPausable = !action.payload.bool;
      return [...state];

    default:
      return state;
  }
};

export default itemsReducer;
