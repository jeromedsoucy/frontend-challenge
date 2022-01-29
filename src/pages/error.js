import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Header } from "../components";
import { ROUTES } from "../constants";
import { useForm } from "../context";

const Error = () => {
  const { dispatch } = useForm();
  const navigate = useNavigate();

  const onClickRestart = () => {
    dispatch({ type: "reset" });
    navigate(ROUTES.HOME);
  };

  return (
    <Layout>
      <Header>Error</Header>
      <p>Uh oh, something went wrong.</p>
      <p>Please try again later</p>
      <div className="pt-4">
        <Button onClick={onClickRestart}>Restart</Button>
      </div>
    </Layout>
  );
};

export default Error;
