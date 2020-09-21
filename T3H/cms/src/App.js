import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "./views/pages/LoginPage";
import DefaultLayout from "./views/layouts/DefaultLayout";
import PrivateRoute from "./views/routers/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/">
          <DefaultLayout />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
