import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./App.css";
import "../src/assets/css/icons.min.css";
import "../src/assets/css/app.min.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/custom.css";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
