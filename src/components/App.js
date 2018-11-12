import React, { Component } from "react";
import Launches from "./Launches";
import Destinations from "./Destinations";
import StepButton from "./StepButton";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.destinationsHandler = this.destinationsHandler.bind(this);

    this.stepsHandler = this.stepsHandler.bind(this);
    this.stepMin = 1;
    this.stepMax = 5;

    this.defaultNextButtonText = "Neste steg";
    this.defaultPreviousButtonText = "Forrige steg";
  }
  state = {
    destination: null,
    step: 1
  };

  destinationsHandler(destination) {
    // If current destination is the same as the new one: Reset the destination
    // If it's not the same: Update the destination
    if (
      this.state.destination != null &&
      this.state.destination.id === destination.id
    ) {
      this.setState({
        destination: null
      });
    } else {
      this.setState({
        destination: destination
      });
    }
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
            <div>
              <h4>Hvor vil du dra?</h4>
              <Destinations handler={this.destinationsHandler} />
            </div>
            <div>
              <h4>Hvor drar du fra?</h4>
              <Launches />
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
