import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { hideSearchForm } from "store/actions/product";
import { Formik, Form } from "formik";
import Field from "./Field";
import Button from "./Button";
import { useHistory } from "react-router-dom";

interface SearchProps {
  searchTerm: string;
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { showSearchForm } = useSelector((state: RootState) => state.search);
  const closeForm = () => {
    dispatch(hideSearchForm());
  };

  const onSubmit = (values: SearchProps, { resetForm }: any) => {
    const { searchTerm } = values;
    history.push(`/search?name=${searchTerm}`);
    resetForm();
    dispatch(hideSearchForm());
  };
  return (
    <Modal isOpen={showSearchForm} onDismiss={closeForm}>
      <div className="add_form">
        <Formik initialValues={{ searchTerm: "" }} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Field
                name="searchTerm"
                control="input"
                type="text"
                label="Search"
                placeholder="momo, Chowmein..."
              />
              <Button
                type="submit"
                placeholder="search"
                loading={loading}
                className="modal_search"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Login;
