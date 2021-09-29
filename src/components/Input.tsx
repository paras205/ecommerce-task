import React, { FC, InputHTMLAttributes } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const Input: FC<InputProps> = (props: InputProps) => {
  const { label, name, required, ...rest } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage component={TextError} name={name!} />
    </div>
  );
};

export default Input;
