import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DefaultLayout from "./view/layout/DefaultLayout";
import '../src/view/layout/css/style.css';
import ContactLayout from "./view/layout/ContactLayout";

function App() {
  return (
    <Router>
      <DefaultLayout></DefaultLayout>
      {/* <ContactLayout></ContactLayout> */}
    </Router>
  );
}

export default App;
