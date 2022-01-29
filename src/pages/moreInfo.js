import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Header, Spinner, Label } from "../components";
import { ROUTES } from "../constants";
import { useForm } from "../context";
import { getColors } from "../services";

const MoreInfo = () => {
  const { state, dispatch } = useForm();
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getColors().then((data) => {
      setColors(data);
      setIsLoading(false);
    });
  }, []);

  const onSubmit = (values) => {
    dispatch({
      type: "update",
      payload: values,
    });
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
    navigate(ROUTES.HOME);
  };

  return (
    <Layout>
      <Header>Additional Information</Header>
      {!!isLoading && <Spinner />}
      {!isLoading && (
        <Formik initialValues={state} validate={validate} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="row g-3">
              <div className="col-md-12">
                <Label htmlFor="color">Color that you ❤️ &nbsp;the most</Label>
                <Field name="color" as="select" className="form-select">
                  <option>-</option>
                  {colors.map((color, index) => (
                    <option value={color} key={index}>
                      {color}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="col-md-12">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="form-check-input"
                    style={{ cursor: "pointer" }}
                  />
                  <Label
                    className="form-check-label"
                    htmlFor="terms"
                    style={{ cursor: "pointer" }}
                  >
                    I agree to the Term and conditions.
                  </Label>
                </div>
              </div>
              <div>
                <Button onClick={onClickBack} className="me-2">
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Layout>
  );
};

export default MoreInfo;
