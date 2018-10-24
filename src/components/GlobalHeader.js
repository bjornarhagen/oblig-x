import React, { Component } from "react";
import GlobalNavigation from "./GlobalNavigation";

class GlobalHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalNavigation />
        <h1>SpaceX - Go beyond</h1>
        <p>Good morning. Welcome to SpaceX</p>
      </React.Fragment>
    );
  }
}

export default GlobalHeader;
