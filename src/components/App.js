import React, { Component } from "react";
import Launches from "./Launches";
import Destinations from "./Destinations";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.summaryHandler = this.summaryHandler.bind(this);
    this.destinationsHandler = this.destinationsHandler.bind(this);
  }
  state = {
    greeting: "Welcome to React"
    destination: null
  };

  summaryHandler(e) {
    e.preventDefault();

    this.setState({
      greeting: e.target.innerHTML
    });
  }

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

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.greeting}</h1>
        <Summary handler={this.summaryHandler} />
        <Summary
          handler={this.summaryHandler}
          destination={this.state.destination}
        />
        <Destinations handler={this.destinationsHandler} />
        <Launches />
      </React.Fragment>
    );
  }
}

class Summary extends Component {
  render() {
    return (
      <div>
        <h2 onClick={this.summaryHandler}>
          {(() => {
            if (this.props.destination != null) {
              return (
                "Step 1: Destination (" +
                this.props.destination.planet +
                ": " +
                this.props.destination.region +
                ")"
              );
            } else {
              return "Step 1: Pick your destination";
            }
          })()}
        </h2>
        <h2 onClick={this.props.handler}>
          Step 2: Plan your flight (date and time)
        </h2>
        <h2 onClick={this.props.handler}>Step 3: Choose your ride</h2>
        <h2 onClick={this.props.handler}>
          Step 4: Fill out info (luggage, seat, room)
        </h2>
        <h2 onClick={this.props.handler}>Step 5: Pay</h2>
        <h2 onClick={this.props.handler}>
          Step 6: Read about partners (hotels & activities)
        </h2>
      </div>
    );
  }
}

export default App;
