import logo from "./logo.svg";
import "./App.css";
import React from "react";

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/navbar/Navbar";
import Content from "./components/content/content";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
