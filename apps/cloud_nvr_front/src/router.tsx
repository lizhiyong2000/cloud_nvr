import * as React from "react";
import { Router, Route, Switch } from "dva/router";
import { connect } from "dva";

import {History} from 'history';

import Devices from "./routes/Devices";
import Users from "./routes/Users";
import Login from "./routes/Login"

class Hello extends React.Component {
  render() {
    return <h1>Hello Dva</h1>;
  }
}

const App = connect()(Hello);

// function RouterConfig({ history }) {
function RouterConfig({ history }: { history: History }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/devices" exact component={Devices} />
        <Route path="/users" exact component={Users} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;