import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./redux/store";
import AppContainer from './modules/App/AppContainer';
import Page404 from './modules/App/Page404';
import HomeContainer from './modules/Home/HomeContainer';
import DashBoardContainer from './modules/DashBoard/DashBoardContainer';
import { RegisterContainer, LoginContainer } from './modules/auth/';

export default (
  <Router history={history}>
    <Route component={AppContainer} path="/">
      <IndexRoute component={HomeContainer} />
      <Route component={LoginContainer} path="/login" />
      <Route component={RegisterContainer} path="/signup" />
      <Route path="/course">
        <IndexRoute component={DashBoardContainer} />
      </Route>
      <Route path="*" component={Page404}/>
    </Route>
  </Router>
);
