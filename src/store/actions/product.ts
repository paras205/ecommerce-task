import {
  SHOW_PRODUCT_FORM,
  HIDE_PRODUCT_FORM,
  GET_ALL_PRODUCTS,
  SEARCH_PRODUCTS,
  Product,
  AllDispatchProp,
} from "../types";
import Api from "../Api";

export const showProductForm = () => {
  return {
    type: SHOW_PRODUCT_FORM,
  };
};

export const hideProductForm = () => {
  return {
    type: HIDE_PRODUCT_FORM,
  };
};

export const addProduct = (data: Product) => {
  return async (dispatch: any) => {
    try {
      const response = await Api.post("/products", data);
      dispatch(getAllProducts());
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch: AllDispatchProp) => {
    try {
      const response = await Api.get("/products");
      dispatch({ type: GET_ALL_PRODUCTS, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchProducts = (searchTerm: string) => {
  return async (dispatch: AllDispatchProp) => {
    try {
      const response = await Api.get(`/products?q=${searchTerm}`);
      dispatch({ type: SEARCH_PRODUCTS, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};
