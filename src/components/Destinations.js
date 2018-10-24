import React, { Component } from "react";
import axios from "axios";
require("../scss/_components/destinations.scss");

class Destinations extends Component {
  constructor(props) {
    super(props);

    this.getDestinations = this.getDestinations.bind(this);
    this.setDestination = this.setDestination.bind(this);

    // Init by getting the destinations
    this.getDestinations();
  }

  state = {
    destination: 0,
    destinations: []
  };

  // Get all destinations from a local JSON file
  getDestinations() {
    axios({ method: "get", baseURL: "/data/", url: "destinations.json" })
      .then(destinations => {
        this.setState({ destinations: destinations.data });
        this.setDestination(this.state.destinations[this.state.destination]);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  setDestination(destination) {
    this.props.handler(destination);

    const elDestinations = document.querySelector("#destinations");
    const elPlanetsWrapper = elDestinations.querySelector(".planets");
    const elPlanets = elPlanetsWrapper.querySelectorAll(".planet");

    for (let i = 0; i < elPlanets.length; i++) {
      const planet = elPlanets[i];
      planet.classList.remove("selected", "next", "previous");
    }

    const selectedPlanet = elPlanets[destination.id - 1];

    selectedPlanet.classList.add("selected");

    if (selectedPlanet.nextSibling) {
      selectedPlanet.nextSibling.classList.add("next");
    } else {
      elPlanets[0].classList.add("next");
    }

    if (selectedPlanet.previousSibling) {
      selectedPlanet.previousSibling.classList.add("previous");
    } else {
      elPlanets[elPlanets.length - 1].classList.add("previous");
    }
  }

  render() {
    return (
      <div id="destinations">
        <div className="planets">
          {this.state.destinations.map(destination => (
            <button
              className="planet"
              key={destination.id}
              onClick={() => this.setDestination(destination)}
              aria-label={"Velg " + destination.planet.name}
            >
              <h5 className="planet-name">{destination.planet.name}</h5>
              <img
                src={destination.planet.image}
                alt={"Bilde av planeten " + destination.planet.name}
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Destinations;
