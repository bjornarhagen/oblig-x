import React from "react";
import ReactDOM from "react-dom";

//

import "./css/index.css";
import App from "./components/App";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import * as serviceWorker from "./js/serviceWorker";

//
ReactDOM.render(<GlobalHeader />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("main"));
ReactDOM.render(<GlobalFooter />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
