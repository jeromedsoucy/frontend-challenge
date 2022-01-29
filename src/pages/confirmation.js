import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { useForm } from "../context";

const Confirmation = () => {
  const { state } = useForm();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(ROUTES.MOFE_INFO);
  };

  const onClickSubmit = () => {
    navigate(ROUTES.SUCCESS);
  };

  console.log(state);
  return (
    <div>
      Confirmation
      <ul>
        <li>First Name: {state.name}</li>
        <li>Email: {state.email}</li>
        <li>Password: {state.password}</li>
        <li>Favorite Color: {state.color}</li>
        <li>
          Terms and conditions: {state.agreement ? "agreed" : "disagreed"}
        </li>
      </ul>
      <div>
        <Button onClick={onClickBack}>Back</Button>
        <Button type="submit" onClick={onClickSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
