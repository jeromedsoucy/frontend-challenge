import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Header, Spinner } from "../components";
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
    <Layout>
      <Header>Confirmation</Header>
      {!!isLoading && <Spinner />}
      {!isLoading && (
        <>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">First Name: {state.name}</li>
            <li className="list-group-item">Email: {state.email}</li>
            <li className="list-group-item">Password: {state.password}</li>
            <li className="list-group-item">Favorite Color: {state.color}</li>
            <li className="list-group-item">
              Terms and conditions: {state.agreement ? "agreed" : "disagreed"}
            </li>
          </ul>
          <div className="pt-4">
            <Button onClick={onClickBack} className="me-2">
              Back
            </Button>
            <Button type="submit" onClick={onClickSubmit}>
              Submit
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Confirmation;
