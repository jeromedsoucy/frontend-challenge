import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Home,
  MoreInfo,
  Confirmation,
  Error,
  Success,
} from './pages';

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
        <Route path="/" element={<Home />} />
        <Route path="more-info" element={<MoreInfo />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="error" element={<Error />} />
        <Route path="success" element={<Success />} />
      </Routes>
      </div>
    );
  }
}

export default App;

