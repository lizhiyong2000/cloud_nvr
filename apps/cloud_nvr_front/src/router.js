import React, { Component } from "react";
import { Router, Route, Switch } from "dva/router";
import { connect } from "dva";

import Devices from "./routes/Devices";
import Users from "./routes/Users";

class Hello extends Component {
  render() {
    return <h1>Hello Dva</h1>;
  }
}

const App = connect()(Hello);

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/devices" exact component={Devices} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
