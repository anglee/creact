import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import Page1 from "./Page1";
import Page2 from "./Page2";

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
        <Route exact path="/page1" render={() => <Page1 />} />
        <Route exact path="/page2" render={({ location }) => <Page2 location={location} />} />
      </div>
    </HashRouter>
  </Provider>
);

export default App;
