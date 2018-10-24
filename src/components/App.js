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
    this.stepMax = 6;

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
        <h2>Reise</h2>
        <h3>Step {this.state.step}</h3>
        <section id="step-1" className="step active">
          <h4>Hvor vil du dra?</h4>
          <Destinations handler={this.destinationsHandler} />
          <StepButton
            handler={this.stepsHandler}
            step={this.state.step}
            direction="next"
            text={this.defaultNextButtonText}
          />
        </section>
        <section id="step-2" className="step">
          <h4>Hvor drar du fra?</h4>
          <Launches />
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
        <section id="step-3" className="step">
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
        <section id="step-4" className="step">
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
        <section id="step-5" className="step">
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
        <section id="step-6" className="step">
          <StepButton
            handler={this.stepsHandler}
            step={this.state.step}
            direction="previous"
            text={this.defaultPreviousButtonText}
          />
        </section>
      </div>
    );
  }
}

export default App;
