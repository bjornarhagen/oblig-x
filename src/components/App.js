import React, { Component } from "react";
import Launches from "./Launches";
import Places from "./Places";
import StepButton from "./StepButton";
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
            <h2>Bestill reise</h2>
            <h3>
              Steg {this.state.step} av {this.stepMax}
            </h3>
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
