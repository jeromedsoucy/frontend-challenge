import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { FormContext } from "../context";

const Confirmation = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  console.log("state", state);

  const onClickBack = () => {
    navigate(ROUTES.MOFE_INFO);
  };

  const onClickSubmit = () => {
    navigate(ROUTES.SUCCESS);
  };

  return (
    <div>
      Confirmation
      <ul>
        <li>First Name:</li>
        <li>Email: </li>
        <li>Password</li>
        <li>Favorite Color</li>
        <li>Terms and conditions</li>
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
