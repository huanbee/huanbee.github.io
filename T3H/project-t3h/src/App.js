import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import DefaultLayout from "./view/layouts/DefaultLayout";


function App() {
  return (
    <Router>
      {/* Header */}
      <DefaultLayout></DefaultLayout>
      
      {/* {body} */}
      
      
      
      {/* {Footer} */}

      {/* <Switch>
        <Route path="/">
       
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
