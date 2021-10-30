import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './Containers/Dashboard/Dashboard.component';
import DetailPage from './Containers/DetailPage/DetailPage.component';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}
