import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Header, Label } from "../components";
import { ROUTES } from "../constants";
import { useForm } from "../context";

const Home = () => {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    dispatch({ type: "update", payload: values });
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
    <Layout>
      <Header>Sign up</Header>
      <Formik initialValues={state} validate={validate} onSubmit={onSubmit}>
        <Form className="row g-3">
          <div className="col-md-12">
            <Label htmlFor="name">First Name</Label>
            <Field id="name" name="name" className="form-control" />
          </div>
          <div className="col-md-12">
            <Label htmlFor="email">Email</Label>
            <Field
              id="email"
              name="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="col-md-12">
            <Label htmlFor="password">Password</Label>
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <div className="pt-4">
            <Button type="submit">Next</Button>
          </div>
        </Form>
      </Formik>
    </Layout>
  );
};

export default Home;
