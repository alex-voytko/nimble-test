import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import itemsReducer from "./tracker-redux/tracker-reducer";

const rootReducer = combineReducers({
  stopwatches: itemsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
