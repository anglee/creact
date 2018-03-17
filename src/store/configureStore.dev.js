import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

export default function configureStore(initialState) {
  const middlewares = [thunk, createLogger({ collapsed: true })];
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
