import React, { Component } from "react";
import axios from "axios";

class Destinations extends Component {
  constructor(props) {
    super(props);

    this.getDestinations = this.getDestinations.bind(this);
    this.setDestination = this.setDestination.bind(this);

    // Init by getting the destinations
    this.getDestinations();
  }

  state = {
    destinations: []
  };

  // Get all destinations from a local JSON file
  getDestinations() {
    axios({ method: "get", baseURL: "/data/", url: "destinations.json" })
      .then(destinations => {
        this.setState({ destinations: destinations.data });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  setDestination(destination) {
    this.props.handler(destination);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Destination</h2>
        <table>
          <thead>
            <tr>
              <th>Planet</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {this.state.destinations.map(destination => (
              <tr
                key={destination.id}
                onClick={() => this.setDestination(destination)}
              >
                <td>{destination.planet}</td>
                <td>{destination.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Destinations;
