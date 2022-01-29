import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { ROUTES } from "../constants";
import { useForm } from "../context";
import { getColors } from "../services";

const MoreInfo = () => {
  const { state, dispatch } = useForm();
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getColors().then((data) => {
      setColors(data);
      setIsLoading(false);
    });
  }, colors);

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
    <div>
      {!!isLoading && "loading"}
      Additional Information
      <Formik initialValues={state} validate={validate} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">Your ❤️ color</label>
              <Field name="color" as="select">
                <option value="">-</option>
                {colors.map((color, index) => (
                  <option value={color} key={index}>
                    {color}
                  </option>
                ))}
              </Field>
            </div>
            <div>
              <Field type="checkbox" name="terms" />
              <label> I agree to the Term and conditions.</label>
            </div>
            <Button onClick={onClickBack}>Back</Button>
            <Button type="submit" disabled={isSubmitting}>
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoreInfo;
