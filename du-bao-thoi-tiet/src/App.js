import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DefaultLayout from "./scenes/DefaultLayout";
import myProfile from "./scenes/Profile";
import RouterIndex from "./components/Router";
import FooterLayout from "./components/Footer";
function App() {
  return (
    <>
      <RouterIndex />
      <FooterLayout />
    </>
  );
}

export default App;
