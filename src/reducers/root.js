import { combineReducers } from "redux";
import page1 from "./page1/page1";
import page2 from "./page2/page2";

// Define the type of our reducers as an object of functions which return the state defined above.
// type Reducers = {[ReducerName in keyof State]: Reducer<State[ReducerName]>}

// Define the reducers in a type-safe manner.
const reducers = {
  page1,
  page2,
};

// Export the combined reducers.
export default combineReducers(reducers);
