import React, { Component } from "react";
import Launches from "./Launches";
import Rockets from "./Rockets";
import Places from "./Places";
import StepButton from "./StepButton";
import SVG from "react-inlinesvg";
import DatePicker from "react-datepicker";
import moment from "moment";
import iconRocket from "../images/icons/space-rocket-flying.svg";
import iconRocket2 from "../images/icons/space-rocket-2.svg";
import iconRocket3 from "../images/icons/space-ship-1.svg";
import iconRocket4 from "../images/icons/space-rocket-1.svg";
import iconRocket5 from "../images/icons/space-rocket-earth.svg";
import "../css/App.css";
require("../scss/_components/datepicker.scss");

function safeParam(value, type, fallback) {
  if (value) {
    if (type === "int") {
      value = parseInt(value);

      if (isNaN(value)) {
        return fallback;
      }
    }
  } else {
    return fallback;
  }

  return value;
}

const url = new URL(window.location);
let initStep = safeParam(url.searchParams.get("step"), "int", 1);

let initFrom = safeParam(url.searchParams.get("from"), "int", 1);
let initWay = safeParam(url.searchParams.get("way"), "int", 1);
let initTo = safeParam(url.searchParams.get("to"), "int", 2);
let initAdults = safeParam(url.searchParams.get("adults"), "int", undefined);
let initChildren = safeParam(
  url.searchParams.get("children"),
  "int",
  undefined
);
let initInfants = safeParam(url.searchParams.get("infants"), "int", undefined);
let initClassId = safeParam(url.searchParams.get("classID"), "int", 1);
let initClassName = safeParam(
  url.searchParams.get("className"),
  "string",
  "Economy"
);

let initLeave = safeParam(url.searchParams.get("leave"), "string", null);
if (initLeave === null) {
  initLeave = moment();
} else {
  initLeave = moment(initLeave);

  if (!initLeave._isValid) {
    initLeave = moment();
  }
}

let initReturn = safeParam(url.searchParams.get("return"), "string", null);
if (initReturn === null) {
  initReturn = moment().add(14, "days");
} else {
  initReturn = moment(initReturn);

  if (!initReturn._isValid) {
    initReturn = moment().add(14, "days");
  }
}

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

  componentDidMount() {
    if (this.state.step) {
      document
        .querySelector("#step-" + this.state.step)
        .classList.add("active");
    }

    if (this.state.travelWay) {
      document
        .querySelector("#travel-way-" + this.state.travelWay)
        .setAttribute("checked", true);
    }
  }

  state = {
    travelFrom: initFrom,
    travelTo: initTo,
    travelWay: initWay,
    travelClass: {
      id: initClassId,
      name: initClassName
    },
    travelLeave: initLeave,
    travelReturn: initReturn,
    travelPeopleAdults: initAdults,
    travelPeopleChildren: initChildren,
    travelPeopleInfants: initInfants,
    step: initStep
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

  travelLeaveHandler(date) {
    this.setState({
      travelLeave: date
    });
  }

  travelReturnHandler(date) {
    this.setState({
      travelReturn: date
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
    const formHeaderClass = document.querySelector(".form-header-class");
    const formHeaderClassActive = document.querySelector(
      ".icon." + this.state.travelClass.name
    );

    formHeaderClass.querySelectorAll(".icon").forEach(icon => {
      icon.classList.remove("active");
    });

    formHeaderClassActive.classList.add("active");
  }

  travelPeopleAdultsHandler(e) {
    this.setState({
      travelPeopleAdults: parseInt(e.target.value)
    });
  }

  travelPeopleChildrenHandler(e) {
    this.setState({
      travelPeopleChildren: parseInt(e.target.value)
    });
  }

  travelPeopleInfantsHandler(e) {
    this.setState({
      travelPeopleInfants: parseInt(e.target.value)
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

    let url = new URL(window.location);
    url.searchParams.set("step", step);
    url.searchParams.set("from", this.state.travelFrom.id);
    url.searchParams.set("way", this.state.travelWay);
    url.searchParams.set("to", this.state.travelTo.id);
    url.searchParams.set("leave", this.state.travelLeave);
    url.searchParams.set("return", this.state.travelReturn);
    url.searchParams.set("adults", this.state.travelPeopleAdults);
    url.searchParams.set("children", this.state.travelPeopleChildren);
    url.searchParams.set("infants", this.state.travelPeopleInfants);
    url.searchParams.set("classID", this.state.travelClass.id);
    url.searchParams.set("className", this.state.travelClass.name);
    window.history.replaceState(null, null, url);

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
          <section id="step-1" className="step">
            <div className="step-1-from">
              <label htmlFor="btn-travel-from">Fra</label>
              <Places
                handler={this.travelFromHandler}
                id="travel-from"
                defaultID={this.state.travelFrom}
              />
            </div>
            <div className="step-1-way radio-selection">
              <div className="way-selector">
                <input
                  id="travel-way-1"
                  type="radio"
                  name="travel-way"
                  value="1"
                  required
                  onChange={this.travelWayHandler.bind(this)}
                />
                <label htmlFor="travel-way-1">
                  <span>Én vei</span>
                  <SVG src={iconRocket} className="icon">
                    <img src="yourfallback.jpg" alt="fallback image" />
                  </SVG>
                </label>
              </div>
              <div className="way-selector">
                <input
                  id="travel-way-2"
                  type="radio"
                  name="travel-way"
                  value="2"
                  required
                  onChange={this.travelWayHandler.bind(this)}
                />
                <label htmlFor="travel-way-2">
                  <span>Tur/retur</span>
                  <SVG src={iconRocket5} className="icon">
                    <img src="yourfallback.jpg" alt="fallback image" />
                  </SVG>
                </label>
              </div>
            </div>
            <div className="step-1-to">
              <label htmlFor="btn-travel-to">Til</label>
              <Places
                handler={this.travelToHandler}
                id="travel-to"
                defaultID={this.state.travelTo}
              />
            </div>
            <div className="step-1-bottom">
              <div className="step-1-leave">
                <label htmlFor="travel-leave">Utreise</label>
                <DatePicker
                  id="travel-leave"
                  name="travel-leave"
                  selected={this.state.travelLeave}
                  placeholderText="Velg en dato"
                  aria-label="Velg en dato for utreise"
                  dateFormat="LL"
                  locale="no-NB"
                  showWeekNumbers
                  withPortal
                  required
                  highlightDates={[
                    { "travel-return-highlight": [this.state.travelReturn] },
                    { "travel-leave-highlight": [this.state.travelLeave] }
                  ]}
                  onChange={this.travelLeaveHandler.bind(this)}
                />
              </div>
              <div className="step-1-return">
                <label htmlFor="travel-return">Hjemreise</label>
                <DatePicker
                  id="travel-return"
                  name="travel-return"
                  selected={this.state.travelReturn}
                  placeholderText="Velg en dato"
                  aria-label="Velg en dato for hjemreise"
                  dateFormat="LL"
                  locale="no-NB"
                  showWeekNumbers
                  withPortal
                  required
                  highlightDates={[
                    { "travel-return-highlight": [this.state.travelReturn] },
                    { "travel-leave-highlight": [this.state.travelLeave] }
                  ]}
                  onChange={this.travelReturnHandler.bind(this)}
                />
              </div>
              <div className="step-1-travel_class">
                <label htmlFor="travel-class">Klasse</label>
                <select
                  name="travel-class"
                  id="travel-class"
                  value={this.state.travelClass.id}
                  required
                  onChange={this.travelClassHandler.bind(this)}
                >
                  <option value="1">Economy</option>
                  <option value="2">Business</option>
                  <option value="3">Luxury</option>
                </select>
              </div>
              <div className="step-1-people-adults">
                <label htmlFor="travel-people-adults">Voksene</label>
                <input
                  id="travel-people-adults"
                  type="number"
                  placeholder="0"
                  min="0"
                  required
                  defaultValue={this.state.travelPeopleAdults}
                  onChange={this.travelPeopleAdultsHandler.bind(this)}
                />
              </div>
              <div className="step-1-people-children">
                <label htmlFor="travel-people-children">Barn</label>
                <input
                  id="travel-people-children"
                  type="number"
                  placeholder="0"
                  min="0"
                  defaultValue={this.state.travelPeopleChildren}
                  onChange={this.travelPeopleChildrenHandler.bind(this)}
                />
              </div>
              <div className="step-1-people-infants">
                <label htmlFor="travel-people-infants">Spebarn</label>
                <input
                  id="travel-people-infants"
                  type="number"
                  placeholder="0"
                  min="0"
                  defaultValue={this.state.travelPeopleInfants}
                  onChange={this.travelPeopleInfantsHandler.bind(this)}
                />
              </div>
            </div>
          </section>
          <section id="step-2" className="step">
            <h4>Velg rakett</h4>
            <Rockets />
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
