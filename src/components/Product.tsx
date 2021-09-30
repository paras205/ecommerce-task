import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import * as yup from "yup";
import { popUp } from "./Toast";
import { ProductInputProps } from "store/types";
import ProductModal from "./Modal";
import { hideProductForm, addProduct } from "store/actions/product";
import { Formik, Form } from "formik";
import Field from "./Field";
import Button from "./Button";

const Product = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const onDismiss = () => {
    dispatch(hideProductForm());
  };
  const { isOpen } = useSelector((state: RootState) => state.product);
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
      popUp("Added successfully");
    }
    setLoading(false);
  };
  return (
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
  );
};

export default Product;
