import React from "react";
import ReactDOM from "react-dom";

import "./js/polyfill-nodelist-foreach";
import "./js/polyfill-number-isnan";
import "./js/polyfill-object-includes";
import "./js/polyfill-url";

import "./css/index.css";
import App from "./components/App";
// import GlobalHeader from "./components/GlobalHeader";
import GlobalNavigation from "./components/GlobalNavigation";
import GlobalFooter from "./components/GlobalFooter";
import * as serviceWorker from "./js/serviceWorker";

ReactDOM.render(<GlobalNavigation />, document.getElementById("nav"));
// ReactDOM.render(<GlobalHeader />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("main"));
ReactDOM.render(<GlobalFooter />, document.getElementById("footer"));

require("./js/modals");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
