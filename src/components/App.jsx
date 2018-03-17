import React from "react";
import "./App.less";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import AppHeader from "./AppHeader/AppHeader";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <AppHeader />
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
        <Route exact path="/page1" render={() => <Page1 />} />
        <Route exact path="/page2" render={({ location }) => <Page2 location={location} />} />
      </div>
    </HashRouter>
  </Provider>
);

export default App;
