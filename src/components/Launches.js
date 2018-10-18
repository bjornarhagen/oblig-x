import React, { Component } from "react";
import axios from "axios";
import { api } from "../js/api.js";

class Launches extends Component {
  constructor(props) {
    super(props);

    this.getLaunchesUpcoming = this.getLaunchesUpcoming.bind(this);
    this.getLaunchesPast = this.getLaunchesPast.bind(this);

    this.getLaunchesUpcoming(); // Init by loading upcoming launches
  }

  state = {
    launches: [],
    launchesUpcoming: [],
    launchesPast: []
  };

  // Get all launches
  getLaunches() {
    axios.get("launches/upcoming").then(launches => {
      this.setState({ launches: launches.data });
    });
  }

  // Get upcoming launches
  getLaunchesUpcoming() {
    axios.get("launches/upcoming").then(launches => {
      this.setState({ launchesUpcoming: launches.data });
    });
  }

  // Get past launches
  getLaunchesPast() {
    axios.get("launches/past").then(launches => {
      this.setState({ launchesPast: launches.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Launches</h2>
        <h3>Upcoming</h3>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Rocket</th>
            </tr>
          </thead>
          {this.state.launchesUpcoming.map(launch => (
            <tr key={launch.flight_number}>
              <td>{launch.mission_name}</td>
              <td>{launch.rocket.rocket_name}</td>
            </tr>
          ))}
        </table>
        <h3>Past</h3>
        <button onClick={this.getLaunchesPast}>Load past launches</button>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Rocket</th>
            </tr>
          </thead>
          {this.state.launchesPast.map(launch => (
            <tr key={launch.flight_number}>
              <td>{launch.mission_name}</td>
              <td>{launch.rocket.rocket_name}</td>
            </tr>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default Launches;
