import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store";
import AppContainer from './modules/App/AppContainer';
import Page404 from './modules/App/Page404';
import RegisterContainer from './modules/Auth/RegisterContainer';

export default (
  <Router history={history}>
    <Route component={AppContainer} path="/">
      <Route component={RegisterContainer} path="/signup" />
      <Route path="*" component={Page404}/>
    </Route>
  </Router>
);
