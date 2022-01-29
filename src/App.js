import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Progress } from "./components";
import { Home, MoreInfo, Confirmation, Error, Success } from "./pages";
import { FormProvider } from "./context";

const App = () => {
  return (
    <FormProvider>
      <Progress />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MORE_INFO} element={<MoreInfo />} />
        <Route path={ROUTES.CONFIRMATION} element={<Confirmation />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
        <Route path={ROUTES.SUCCESS} element={<Success />} />
      </Routes>
    </FormProvider>
  );
};

export default App;
