import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ManagerPage from "./pages/managerPage/ManagerPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/gerente">
          <ManagerPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
