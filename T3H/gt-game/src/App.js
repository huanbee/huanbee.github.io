import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DefaultLayout from "./view/layout/DefaultLayout";
import "../src/view/layout/css/style.css";
import ContactLayout from "./view/layout/ContactLayout";
import AboutLayout from "./view/layout/AboutLayout";
import GamesLayout from "./view/layout/GamesLayout";
import SingleLayout from "./view/layout/SingleLayout";
import NewsLayout from "./view/layout/NewsLayout";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DefaultLayout}></Route>
        <Route path="/home" component={DefaultLayout}></Route>
        <Route path="/contact" component={ContactLayout}></Route>
        <Route path="/about" component={AboutLayout}></Route>
        <Route path="/games" component={GamesLayout}></Route>
        <Route path="/single" component={SingleLayout}></Route>
        <Route path="/news" component={NewsLayout}></Route>
      </Switch>
    </Router>
  );
}

export default App;
