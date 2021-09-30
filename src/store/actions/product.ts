import {
  SHOW_PRODUCT_FORM,
  HIDE_PRODUCT_FORM,
  GET_ALL_PRODUCTS,
  SEARCH_PRODUCTS,
  GET_INGREDIENT,
  Product,
  AllDispatchProp,
  SHOW_SEARCH_FORM,
  HIDE_SEARCH_FORM,
} from "../types";
import Api from "../Api";
import { popUp } from "components/Toast";

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
      dispatch(getAllProducts(""));
      return response;
    } catch (err) {
      popUp("Something went wrong", "error");
    }
  };
};

export const getAllProducts = (ingredient: string) => {
  return async (dispatch: AllDispatchProp) => {
    try {
      let response: any = {};
      if (ingredient) {
        response = await Api.get(
          `/products?ingredient.ingredient_name=${ingredient}`
        );
      } else {
        response = await Api.get(`/products`);
      }
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
export const getIngredients = () => {
  return async (dispatch: AllDispatchProp) => {
    try {
      const response = await Api.get(`/products`);
      dispatch({ type: GET_INGREDIENT, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};
export const showSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
  };
};
export const hideSearchForm = () => {
  return {
    type: HIDE_SEARCH_FORM,
  };
};
