import React, { Component } from "react";
import logo from "../images/logo.svg";

class GlobalNavigation extends Component {
  render() {
    return (
      <nav>
        <a className="screen-reader-text" href="#main">
          Skip to content
        </a>
        <a className="screen-reader-text" href="#footer">
          Skip to footer
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <a href="#1">link 1</a>
          <a href="#2">link 2</a>
          <a href="#3">link 3</a>
        </ul>
      </nav>
    );
  }
}

export default GlobalNavigation;
