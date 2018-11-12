import React, { Component } from "react";
import Launches from "./Launches";
import Places from "./Places";
import StepButton from "./StepButton";
import SVG from "react-inlinesvg";
import iconRocket from "../images/icons/space-rocket-flying.svg";
import iconRocket2 from "../images/icons/space-rocket-2.svg";
import iconRocket3 from "../images/icons/space-ship-1.svg";
import iconRocket4 from "../images/icons/space-rocket-1.svg";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.travelFromHandler = this.travelFromHandler.bind(this);
    this.travelToHandler = this.travelToHandler.bind(this);

    this.stepsHandler = this.stepsHandler.bind(this);
    this.stepMin = 1;
    this.stepMax = 5;

    this.defaultNextButtonText = "Neste steg";
    this.defaultPreviousButtonText = "Forrige steg";
  }
  state = {
    travelFrom: null,
    travelTo: null,
    travelWay: 1,
    travelClass: {
      id: 1,
      name: "Economy"
    },
    step: 1
  };

  travelFromHandler(place) {
    this.setState({
      travelFrom: place
    });
  }

  travelToHandler(place) {
    this.setState({
      travelTo: place
    });
  }

  travelWayHandler(e) {
    this.setState({
      travelWay: e.target.value
    });
  }

  travelClassHandler(e) {
    const classes = ["Economy", "Business", "Luxury"];

    this.setState(
      {
        travelClass: {
          id: parseInt(e.target.value),
          name: classes[parseInt(e.target.value) - 1]
        }
      },
      this.travelClassUpdate
    );
  }

  travelClassUpdate() {
    console.log(this.state.travelClass);

    const formHeaderClass = document.querySelector(".form-header-class");
    const formHeaderClassActive = document.querySelector(
      ".icon." + this.state.travelClass.name
    );

    formHeaderClass.querySelectorAll(".icon").forEach(icon => {
      icon.classList.remove("active");
    });

    formHeaderClassActive.classList.add("active");
  }

  stepsHandler(step) {
    if (step < this.stepMin) {
      step = this.stepMin;
    } else if (step > this.stepMax) {
      step = this.stepMax;
    }

    this.setState({
      step: step
    });

    const elSteps = document.querySelectorAll("#steps .step");
    for (let i = 0; i < elSteps.length; i++) {
      const elStep = elSteps[i];
      elStep.classList.remove("active");
    }

    document.querySelector("#step-" + step).classList.add("active");
  }

  render() {
    return (
      <div id="steps">
        <form action="" method="post">
          <header className="form-header">
            <div className="form-header-text">
              <h2>Bestill reise</h2>
              <h3>
                Steg {this.state.step} av {this.stepMax}
              </h3>
            </div>
            <div className="form-header-class">
              <SVG src={iconRocket3} className="icon Economy active">
                <img src="yourfallback.jpg" alt="fallback image" />
              </SVG>
              <SVG src={iconRocket4} className="icon Business">
                <img src="yourfallback.jpg" alt="fallback image" />
              </SVG>
              <SVG src={iconRocket2} className="icon Luxury">
                <img src="yourfallback.jpg" alt="fallback image" />
              </SVG>
              <span>{this.state.travelClass.name}</span>
            </div>
          </header>
          <section id="step-1" className="step active">
            <div className="step-1-from">
              <h4>Fra</h4>
              <Places
                handler={this.travelFromHandler}
                id="travel-from"
                defaultID="1"
              />
            </div>
            <div className="step-1-way">
              <div>
                <input
                  id="travel-way-1"
                  type="radio"
                  name="travel-way"
                  value="1"
                  defaultChecked
                  onChange={this.travelWayHandler.bind(this)}
                />
                <label htmlFor="travel-way-1">Én vei</label>
              </div>
              <div>
                <input
                  id="travel-way-2"
                  type="radio"
                  name="travel-way"
                  value="2"
                  onChange={this.travelWayHandler.bind(this)}
                />
                <label htmlFor="travel-way-2">Tur/retur</label>
              </div>
            </div>
            <div className="step-1-to">
              <h4>Til</h4>
              <Places
                handler={this.travelToHandler}
                id="travel-to"
                defaultID="2"
              />
            </div>
            </div>
          </section>
          <section id="step-2" className="step">
            <h4>Rakett</h4>
          </section>
          <section id="step-3" className="step">
            <h4>Bagasje</h4>
          </section>
          <section id="step-4" className="step">
            <h4>Oppsummering</h4>
            <select
              name="travel-class"
              id="travel-class"
              defaultValue="1"
              onChange={this.travelClassHandler.bind(this)}
            >
              <option value="1">Economy</option>
              <option value="2">Business</option>
              <option value="3">Luxury</option>
            </select>
          </section>
          <section id="step-5" className="step">
            <h4>Betaling</h4>
          </section>
          <section className="form-actions">
            <StepButton
              handler={this.stepsHandler}
              step={this.state.step}
              direction="previous"
              text={this.defaultPreviousButtonText}
            />
            <StepButton
              handler={this.stepsHandler}
              step={this.state.step}
              direction="next"
              text={this.defaultNextButtonText}
            />
          </section>
        </form>
      </div>
    );
  }
}

export default App;
