import React, { Component } from "react";
import axios from "axios";
require("es6-promise").polyfill();
require("../scss/_components/places.scss");

class Places extends Component {
  constructor(props) {
    super(props);

    this.getPlaces = this.getPlaces.bind(this);
    this.setPlace = this.setPlace.bind(this);

    // Init by getting the places
    this.getPlaces();
  }

  state = {
    place: {
      id: this.props.defaultID,
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
    places: []
  };

  // Get all places from a local JSON file
  getPlaces() {
    axios({ method: "get", baseURL: "/data/", url: "places.json" })
      .then(places => {
        this.setState({
          place: places.data[this.props.defaultID - 1],
          places: places.data
        });

        this.setPlace(this.state.place);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  setPlace(place) {
    this.props.handler(place);

    this.setState({
      place: place
    });

    const elPlaces = document.querySelector("#" + this.props.id);
    const elPlanetsWrapper = elPlaces.querySelector(".planets-inner");
    const elPlanets = elPlanetsWrapper.querySelectorAll(".planet");

    // Remove classes from all planets
    for (let i = 0; i < elPlanets.length; i++) {
      const planet = elPlanets[i];
      planet.classList.remove("selected", "next", "previous");
    }

    // Set selected planet
    const selectedPlanet = elPlanets[place.id - 1];
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
          data-target={"#" + this.props.id}
          id={"btn-" + this.props.id}
        >
          {this.state.place.planet.name}
        </button>
        <input
          type="hidden"
          name={this.props.id}
          value={this.state.place.id}
          readOnly
        />
        <div id={this.props.id} className="places modal">
          <div className="places-inner modal-inner">
            <div className="planets-outer">
              <div className="planets-inner">
                {this.state.places.map(place => (
                  <div
                    className="planet"
                    key={place.id}
                    role="button"
                    onClick={() => this.setPlace(place)}
                    aria-label={"Velg " + place.planet.name}
                  >
                    <span className="planet-name">{place.planet.name}</span>
                    <img
                      src={place.planet.image}
                      alt={"Bilde av planeten " + place.planet.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="planet-info-wrapper">
              <h5>{this.state.place.planet.name}</h5>

              <div className="planet-info">
                <div className="planet-info-tab planet-general-1">
                  <h6>Informasjon 1</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.place.infoText[0]
                    }}
                  />
                </div>
                <div className="planet-info-tab planet-moons">
                  <h6>Måner</h6>
                  <ul>
                    {this.state.place.moons.map(moon => (
                      <li key={this.state.place.id + "-" + moon}>{moon}</li>
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
                            this.state.place.planet.orbitalCharacteristics
                              .period
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Hastighet</th>
                        <td>
                          {this.state.place.planet.orbitalCharacteristics.speed}
                        </td>
                      </tr>
                      <tr>
                        <th>Satellitter</th>
                        <td>
                          {
                            this.state.place.planet.orbitalCharacteristics
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
                            this.state.place.planet.physicalCharacteristics
                              .surfaceTemp.min
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Median</th>
                        <td>
                          {
                            this.state.place.planet.physicalCharacteristics
                              .surfaceTemp.mean
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Max</th>
                        <td>
                          {
                            this.state.place.planet.physicalCharacteristics
                              .surfaceTemp.max
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
                            this.state.place.planet.physicalCharacteristics
                              .gravity
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Areal</th>
                        <td>
                          {
                            this.state.place.planet.physicalCharacteristics
                              .surfaceArea
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Radius</th>
                        <td>
                          {
                            this.state.place.planet.physicalCharacteristics
                              .radius
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Volum</th>
                        <td>
                          {
                            this.state.place.planet.physicalCharacteristics
                              .volume
                          }
                        </td>
                      </tr>
                      <tr>
                        <th>Masse</th>
                        <td>
                          {this.state.place.planet.physicalCharacteristics.mass}
                        </td>
                      </tr>
                      <tr>
                        <th>Atmosfære</th>
                      </tr>
                      <tr>
                        <th>Trykk</th>
                        <td>
                          {this.state.place.planet.atmosphere.surfacePressure}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="planet-info-tab planet-general-2">
                  <h6>Informasjon 2</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.place.infoText[1]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-close" type="button">
              Lukk
            </button>
            <button className="modal-close success" type="button">
              Ok
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Places;
