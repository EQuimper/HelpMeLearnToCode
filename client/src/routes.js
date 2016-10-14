import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store";
import AppContainer from './modules/App/AppContainer';
import Page404 from './modules/App/Page404';
import HomeView from './modules/Home/HomeView';
import { RegisterContainer, LoginContainer } from './modules/Auth/';

export default (
  <Router history={history}>
    <Route component={AppContainer} path="/">
      <IndexRoute component={HomeView} />
      <Route component={LoginContainer} path="/login" />
      <Route component={RegisterContainer} path="/signup" />
      <Route path="*" component={Page404}/>
    </Route>
  </Router>
);
