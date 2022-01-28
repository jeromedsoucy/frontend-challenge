import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";

const Home = () => {
  const navigate = useNavigate();
  const onSubmit = (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);

    navigate(ROUTES.MORE_INFO);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <div>
      Sign up
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
