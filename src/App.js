import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Home, MoreInfo, Confirmation, Error, Success } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MORE_INFO} element={<MoreInfo />} />
          <Route path={ROUTES.CONFIRMATION} element={<Confirmation />} />
          <Route path={ROUTES.ERROR} element={<Error />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
        </Routes>
      </div>
    );
  }
}

export default App;
