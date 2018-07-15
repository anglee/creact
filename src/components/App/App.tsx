import glamorous, { ThemeProvider } from "glamorous";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import CreateDataPage from "./pages/CreateDataPage/CreateDataPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ViewDataPage from "./pages/ViewDataPage/ConnectedViewDataPage";
import theme from "./theme/theme";

const Root = glamorous.div(({ theme: { headerHeight } }: { theme: any }) => ({
  " .ant-layout": {
    marginTop: `${headerHeight}px`
  }
}));

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Root>
            <Switch>
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to="/home" />}
              />
              <Route exact={true} path="/home" render={() => <HomePage />} />
              <Route
                exact={true}
                path="/view"
                render={() => <ViewDataPage />}
              />
              <Route
                exact={true}
                path="/create"
                render={() => <CreateDataPage />}
              />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </Root>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
