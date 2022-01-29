import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { useForm } from "../context";

const Success = () => {
  const { dispatch } = useForm();
  const navigate = useNavigate();

  const onClickRestart = () => {
    dispatch({ type: "reset" });
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      You should receive a confirmation email soon.
      <Button onClick={onClickRestart}>Restart</Button>
    </div>
  );
};

export default Success;
