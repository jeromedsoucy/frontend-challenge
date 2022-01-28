import React, { createStore, Provider, createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FORM_INITIAL_VALUES } from "./constants";
import { FormContext } from "./context";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
