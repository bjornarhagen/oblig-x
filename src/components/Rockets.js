import React, { Component } from "react";
import axios from "axios";
import RocketContent from "./RocketContent";
import openModal from "../js/modals";
require("../js/api.js");

class Rockets extends Component {
  constructor(props) {
    super(props);

    this.getRockets = this.getRockets.bind(this);
    this.getRockets(); // Init by loading rockets
  }

  state = {
    rockets: []
  };

  // Get all rockets
  getRockets() {
    axios.get("rockets").then(rockets => {
      this.setState({ rockets: rockets.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.rockets.map(rocket => (
          <li key={rocket.id}>
            <img
              className="rocket-select-image"
              src={rocket.flickr_images[0]}
              alt={"Bilde for " + rocket.rocket_name}
            />
            <h5>{rocket.rocket_name}</h5>
            <button
              className="primary"
              type="button"
              aria-label={"Velg raketten " + rocket.rocket_name}
            >
              Velg
            </button>
            <div id={"rocket-" + rocket.id} className="modal">
              <RocketContent rocket={rocket} />
              <div className="modal-footer">
                <button className="modal-close success" type="button">
                  Ok
                </button>
              </div>
            </div>
            <button
              className="modal-trigger"
              type="button"
              onClick={openModal.bind(this)}
              data-target={"#rocket-" + rocket.id}
            >
              Les mer
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Rockets;
