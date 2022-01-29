import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Header } from "../components";
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
    <Layout>
      <Header>Success</Header>
      <p>You should receive a confirmation email soon.</p>
      <div className="pt-4">
        <Button onClick={onClickRestart}>Restart</Button>
      </div>
    </Layout>
  );
};

export default Success;
