import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

export default function configureStore(initialState) {
  const middlewares = [thunk];
  const store = createStore(reducer, initialState, compose(applyMiddleware(...middlewares)));
  store.asyncReducers = {};
  return store;
}
