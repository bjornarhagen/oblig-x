import React, { Component } from "react";

class StepButton extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    this.props.handler(this.props.step + 1);
  }

  previousStep() {
    this.props.handler(this.props.step - 1);
  }

  render() {
    return (
      <button
        className="button-step light"
        type="button"
        onClick={() => {
          if (this.props.direction === "previous") {
            this.previousStep();
          } else {
            this.nextStep();
          }
        }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default StepButton;
