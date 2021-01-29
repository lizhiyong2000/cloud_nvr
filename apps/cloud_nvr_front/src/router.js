import React, { Component } from "react";
import { Router, Route, Switch } from "dva/router";
import { connect } from "dva";

import Products from "./routes/Products";

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
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
