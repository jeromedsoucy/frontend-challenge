import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";

const Error = () => {
  const navigate = useNavigate();

  const onClickRestart = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      Uh oh, something went wrong. Please try again later.
      <Button onClick={onClickRestart}>Restart</Button>
    </div>
  );
};

export default Error;
