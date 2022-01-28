import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";

const Confirmation = () => {
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    navigate(ROUTES.CONFIRMATION);
  };

  const validate = (values) => {
    const errors = {};
    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //   errors.email = "Invalid email address";
    // }
    return errors;
  };

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
