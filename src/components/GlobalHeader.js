import React, { Component } from "react";
import GlobalNavigation from "./GlobalNavigation";

class GlobalHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalNavigation />
        <h1>Hello</h1>
      </React.Fragment>
    );
  }
}

export default GlobalHeader;
