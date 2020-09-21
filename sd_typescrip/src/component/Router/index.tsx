//component
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Ex1 from '../../scenes/Ex1';
import Login from '../../scenes/Login';
import ProtectedRoute from './ProtectedRouter';

const RouterIndex = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" component={Ex1} />

    </Switch>
  )
}

export default RouterIndex