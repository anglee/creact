import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";

it("renders without crashing", () => {
  const reducer = _.identity;
  const store = createStore(reducer, {});
  const div = document.createElement("div");
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
