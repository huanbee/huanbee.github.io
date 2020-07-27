import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginPage from "./view/pages/LoginPage";
import HomePage from "./view/pages/HomePage";

import Defaultlayout from "./view/layouts/DefaultLayout";
import PrivateRoute from './view/router/PrivateRoute';

function App() {
  return (
    <Router>
      {/* Header */}
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home page</Link>
            </li>
          </ul>
        </nav>
      </div> */}

      {/* Body */}
      <Switch>
        <Route path="/login"> <LoginPage /> </Route>
        <PrivateRoute path="/"><Defaultlayout /></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
