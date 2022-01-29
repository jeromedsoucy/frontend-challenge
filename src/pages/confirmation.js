import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { useForm } from "../context";
import { submit } from "../services";

const Confirmation = () => {
  const { state } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickBack = () => {
    navigate(ROUTES.MORE_INFO);
  };

  const onClickSubmit = () => {
    setIsLoading(true);

    submit(state).then((data) => {
      setIsLoading(false);
      if (data.status === 400) {
        // TODO: display backend error somewhere. In a toast maybe?
        navigate(ROUTES.ERROR);
      } else {
        navigate(ROUTES.SUCCESS);
      }
    });
  };

  return (
    <div>
      {!!isLoading && "loading"}
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
