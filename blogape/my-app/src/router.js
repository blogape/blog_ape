import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home.js";
import App from "./App";
import Ihome from "./components/content/index";
import Login from "./pages/login/";
import Register from "./pages/register/";
import Index from "./pages/home/";
import Vindex from './pages/index/';
import Issue from './pages/issue/';
import IssueContent from './pages/issue/content';

class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/issue" render={()=>(
            <Issue>
              <Switch>
                <Route path='/issue' component={IssueContent}></Route>
              </Switch>
            </Issue>
          )} />

          <Route
            exact
            path="/index"
            render={() => (
              <Index>
                <Switch>
                  <Route exact path="/index" component={Vindex} />
                </Switch>
              </Index>
            )}
          />
          <Route
            path="/home"
            render={() => (
              <Home>
                <Switch>
                  <Route exact path="/home" component={Ihome} />
                </Switch>
              </Home>
            )}
          />
        </App>
      </HashRouter>
    );
  }
}
export default IRouter;
