import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { FormContext } from "../context";

const MoreInfo = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  console.log("more info state", state);

  const onSubmit = (values) => {
    dispatch({ type: "update", payload: values });
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
    <div>
      Additional Information
      <Formik
        initialValues={{ color: "", agreement: "" }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          isSubmitting,
          getFieldProps,
          handleChange,
          handleBlur,
          values,
        }) => (
          <Form>
            <div>
              <label htmlFor="firstName">Your ❤️ color</label>
              <Field name="color" as="select">
                <option value="">-</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
            <div>
              <Field
                type="checkbox"
                id="agreement"
                name="agreement"
                value="agreed"
              />
              <label> I agree to the Term and conditions.</label>
            </div>
            <Button onClick={onClickBack}>Back</Button>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoreInfo;
