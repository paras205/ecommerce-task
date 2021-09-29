import {
  SHOW_PRODUCT_FORM,
  HIDE_PRODUCT_FORM,
  GET_ALL_PRODUCTS,
  ProductState,
  ActionProps,
} from "../types";

const initialState: ProductState = {
  isOpen: false,
  products: [],
};
export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case SHOW_PRODUCT_FORM:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_PRODUCT_FORM:
      return {
        ...state,
        isOpen: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
