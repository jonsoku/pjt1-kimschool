import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Home } from '../containers/Home';
import { Sementic } from '../containers/Sementic';
import { Notice } from '../containers/Notice';
import NotPage from './NotPage';

export default () => (
  <Router>
    <Sementic />
    <Switch>
      <Route path="/404page" exact component={NotPage} />
      <Route path="/" exact component={Home} />
      <Route path="/notices" exact component={Notice} />
      <Redirect from="*" to="/404page" />
    </Switch>
  </Router>
);
