import React, { Component } from "react";
// import logo from './logo.svg';
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.summaryHandler = this.summaryHandler.bind(this);
  }
  state = {
    greeting: "Welcome to React"
  };

  summaryHandler(e) {
    e.preventDefault();

    this.setState({
      greeting: e.target.innerHTML
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <Summary handler={this.summaryHandler} />
      </div>
    );
  }
}

class Summary extends Component {
  render() {
    return (
      <div>
        <h2 onClick={this.props.handler}>Step 1: Pick your destination</h2>
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
