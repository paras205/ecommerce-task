import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { hideLoginForm } from "store/actions/auth";
import * as yup from "yup";
import { Formik, Form } from "formik";
import Field from "./Field";
import Button from "./Button";
import { User } from "store/types";
import { login } from "store/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { showLoginForm } = useSelector((state: RootState) => state.authModal);
  const closeForm = () => {
    dispatch(hideLoginForm());
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const handleLogin = (values: User, { resetForm }: any) => {
    dispatch(login(values));
    resetForm();
    dispatch(hideLoginForm());
  };
  return (
    <Modal isOpen={showLoginForm} onDismiss={closeForm}>
      <div className="add_form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form>
              <Field
                name="email"
                control="input"
                type="text"
                label="Email"
                placeholder="Enter Your Email"
              />
              <Field
                name="password"
                control="input"
                type="password"
                label="Password"
                placeholder="Enter Your Password"
              />
              <Button
                type="submit"
                placeholder="Login"
                className="add_product_btn"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Login;
