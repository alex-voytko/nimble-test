import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./tracker-redux/tracker-slice";

const store = configureStore({
  reducer: { stopwatches: trackerReducer },
});

export default store;
