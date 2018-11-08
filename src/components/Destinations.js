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
    destination: {
      id: 1,
      planet: {
        name: "",
        image: "",
        orbitalCharacteristics: {
          period: "",
          speed: "",
          satellites: 0
        },
        physicalCharacteristics: {
          surfaceTemp: {
            min: "",
            mean: "",
            max: ""
          },
          gravity: 1,
          surfaceArea: "",
          radius: "",
          volume: "",
          mass: ""
        },
        atmosphere: {
          surfacePressure: 0
        }
      },
      launchpads: [],
      moons: ["Moon"],
      infoText: []
    },
    destinations: []
  };

  // Get all destinations from a local JSON file
  getDestinations() {
    axios({ method: "get", baseURL: "/data/", url: "destinations.json" })
      .then(destinations => {
        this.setState({
          destination: destinations.data[0],
          destinations: destinations.data
        });

        this.setDestination(this.state.destination);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  setDestination(destination) {
    this.props.handler(destination);

    this.setState({
      destination: destination
    });

    const elDestinations = document.querySelector("#destinations");
    const elPlanetsWrapper = elDestinations.querySelector(".planets-inner");
    const elPlanets = elPlanetsWrapper.querySelectorAll(".planet");

    // Remove classes from all planets
    for (let i = 0; i < elPlanets.length; i++) {
      const planet = elPlanets[i];
      planet.classList.remove("selected", "next", "previous");
    }

    // Set selected planet
    const selectedPlanet = elPlanets[destination.id - 1];
    selectedPlanet.classList.add("selected");

    // Set next planet
    if (selectedPlanet.nextSibling) {
      selectedPlanet.nextSibling.classList.add("next");
    } else {
      elPlanets[0].classList.add("next");
    }

    // Set previous planet
    if (selectedPlanet.previousSibling) {
      selectedPlanet.previousSibling.classList.add("previous");
    } else {
      elPlanets[elPlanets.length - 1].classList.add("previous");
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="modal-trigger"
          type="button"
          data-target="#destinations"
        >
          {this.state.destination.planet.name}
        </button>
        <div id="destinations" className="modal">
          <div className="destinations-inner modal-inner">
            <div className="planets-outer">
              <div className="planets-inner">
                {this.state.destinations.map(destination => (
                  <button
                    className="planet"
                    key={destination.id}
                    type="button"
                    onClick={() => this.setDestination(destination)}
                    aria-label={"Velg " + destination.planet.name}
                  >
                    <span className="planet-name">
                      {destination.planet.name}
                    </span>
                    <img
                      src={destination.planet.image}
                      alt={"Bilde av planeten " + destination.planet.name}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="planet-info-wrapper">
              <h5>{this.state.destination.planet.name}</h5>

              <div className="planet-info">
                <div className="planet-info-tab planet-general-1">
                  <h6>Informasjon 1</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.destination.infoText[0]
                    }}
                  />
                </div>
                <div className="planet-info-tab planet-moons">
                  <h6>Måner</h6>
                  <ul>
                    {this.state.destination.moons.map(moon => (
                      <li key={this.state.destination.id + "-" + moon}>
                        {moon}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="planet-info-tab planet-specs">
                  <h6>Specs</h6>
                  <table>
                    <tbody>
                      <tr>
                        <th>Bane</th>
                      </tr>
                      <tr>
                        <th>Periode</th>
                        <td>
                          {
                            this.state.destination.planet.orbitalCharacteristics
                              .period
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Hastighet</th>
                        <td>
                          {
                            this.state.destination.planet.orbitalCharacteristics
                              .speed
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Satellitter</th>
                        <td>
                          {
                            this.state.destination.planet.orbitalCharacteristics
                              .satellites
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Temperatur</th>
                      </tr>
                      <tr>
                        <th>Min</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.surfaceTemp.min
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Median</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.surfaceTemp.mean
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Max</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.surfaceTemp.max
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Egenskaper</th>
                      </tr>
                      <tr>
                        <th>Tyndekraft</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.gravity
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Areal</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.surfaceArea
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Radius</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.radius
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Volum</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.volume
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Masse</th>
                        <td>
                          {
                            this.state.destination.planet
                              .physicalCharacteristics.mass
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Atmosfære</th>
                      </tr>
                      <tr>
                        <th>Trykk</th>
                        <td>
                          {
                            this.state.destination.planet.atmosphere
                              .surfacePressure
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="planet-info-tab planet-general-2">
                  <h6>Informasjon 2</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.destination.infoText[1]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-close" type="button">
              Avbryt
            </button>
            <button className="modal-close" type="button">
              Ok
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Destinations;
