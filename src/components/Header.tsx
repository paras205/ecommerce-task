import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "store/actions/theme";
import {
  showProductForm,
  hideProductForm,
  addProduct,
} from "store/actions/product";
import { showLoginForm } from "store/actions/auth";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { Formik, Form } from "formik";
import Field from "./Field";
import { Link } from "react-router-dom";
import Button from "./Button";
import ProductModal from "./Modal";
import { RootState } from "store/store";
import { ProductInputProps } from "store/types";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

interface SearchProps {
  searchTerm: string;
}

const Header: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const setTheme = () => {
    dispatch(toogleTheme());
  };
  const handleProductForm = () => {
    dispatch(showProductForm());
  };
  const onDismiss = () => {
    dispatch(hideProductForm());
  };
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { isOpen } = useSelector((state: RootState) => state.product);
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const onSubmit = (values: SearchProps, { resetForm }: any) => {
    const { searchTerm } = values;
    history.push(`/search?name=${searchTerm}`);
    resetForm();
  };
  const productValidationSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    ingredient_name: yup.string().required("Ingredient name is required"),
    ingredient_quantity: yup
      .number()
      .min(1)
      .required("Ingredient quantity is required"),
    unit: yup.number().min(1).required("Unit is required"),
    price: yup.number().min(1).required("Price is required"),
    imageUrl: yup.string().required("Image Url is required"),
  });
  const handleAddProduct = async (
    values: ProductInputProps,
    { resetForm }: any
  ) => {
    const {
      name,
      ingredient_name,
      ingredient_quantity,
      unit,
      imageUrl,
      price,
      stepsToCook,
    } = values;
    const dataToSend = {
      name,
      ingredient: {
        ingredient_name,
        ingredient_quantity,
        unit,
      },
      imageUrl,
      price,
      stepsToCook,
    };
    setLoading(true);
    const response: any = await dispatch(addProduct(dataToSend));
    if (response?.status == 201) {
      resetForm();
      dispatch(hideProductForm());
    }
    setLoading(false);
  };
  const handleLoginForm = () => {
    dispatch(showLoginForm());
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-search">
              <Formik initialValues={{ searchTerm: "" }} onSubmit={onSubmit}>
                {() => (
                  <Form>
                    <Field
                      name="searchTerm"
                      control="input"
                      type="text"
                      placeholder="momo, Chowmein..."
                    />
                    <Button
                      type="submit"
                      placeholder="search"
                      loading={loading}
                      className="search_btn"
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <Button
                    type="button"
                    placeholder="Add Product"
                    className="add_new"
                    onClick={handleProductForm}
                  />
                </li>
                <li>
                  {authenticated ? (
                    <Link to="/cart" className="cart_icon">
                      <BiCartAlt />
                      {cartItems?.length > 0 && (
                        <span className="cart_badge">{cartItems.length}</span>
                      )}
                    </Link>
                  ) : (
                    <BiUser onClick={handleLoginForm} />
                  )}
                </li>
                {!isDark ? (
                  <li onClick={setTheme}>
                    <BsToggleOff />
                  </li>
                ) : (
                  <li onClick={setTheme}>
                    <BsToggleOn />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <ProductModal isOpen={isOpen} onDismiss={onDismiss}>
        <div className="add_form">
          <Formik
            initialValues={{
              name: "",
              ingredient_name: "",
              ingredient_quantity: 0,
              unit: 0,
              imageUrl: "",
              price: 0,
              stepsToCook: "",
            }}
            validationSchema={productValidationSchema}
            onSubmit={handleAddProduct}
          >
            {() => (
              <Form>
                <Field
                  name="name"
                  control="input"
                  type="text"
                  label="Name of the dish"
                  placeholder="Enter Name of the dish"
                />
                <Field
                  name="ingredient_name"
                  control="input"
                  type="text"
                  label="Ingredient Name"
                  placeholder="Enter Ingredient Name"
                />
                <Field
                  name="ingredient_quantity"
                  control="input"
                  type="number"
                  label="Ingredient quantity"
                  placeholder="Enter Ingredient quantity"
                />
                <Field
                  name="unit"
                  control="input"
                  type="number"
                  label="Ingredient Unit"
                  placeholder="Enter Ingredient Unit"
                />
                <Field
                  name="price"
                  control="input"
                  type="number"
                  label="Price"
                  placeholder="Enter dish price"
                />
                <Field
                  name="imageUrl"
                  control="input"
                  type="text"
                  label="Image Url"
                  placeholder="Enter Image Url"
                />
                <Button
                  type="submit"
                  placeholder="Add Product"
                  loading={loading}
                  className="add_product_btn"
                />
              </Form>
            )}
          </Formik>
        </div>
      </ProductModal>
    </>
  );
};

export default Header;
