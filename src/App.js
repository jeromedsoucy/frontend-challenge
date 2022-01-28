import React, { Component, useReducer, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES, FORM_INITIAL_VALUES } from "./constants";
import { Home, MoreInfo, Confirmation, Error, Success } from "./pages";
import { formReducer } from "./reducer";
import { FormContext } from "./context";

const App = () => {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_VALUES);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <div>
      <FormContext.Provider value={contextValue}>
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
      </FormContext.Provider>
    </div>
  );
};

export default App;
