import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./utils/registerServiceWorker";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
