import React, { Component } from "react";

class GlobalFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          &copy; 2018 -{" "}
          <a
            href="https://bjornar.hagen.codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bjørnar Hagen
          </a>
        </p>
        <p>
          Powered by the{" "}
          <a
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            SpaceX REST API
          </a>
        </p>
        <nav>
          <a className="screen-reader-text" href="#header">
            Go back up to navigation
          </a>
          <a className="screen-reader-text" href="#main">
            Go back up to content
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default GlobalFooter;
