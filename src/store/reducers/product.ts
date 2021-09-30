import {
  SHOW_PRODUCT_FORM,
  HIDE_PRODUCT_FORM,
  GET_ALL_PRODUCTS,
  GET_INGREDIENT,
  ProductState,
  ActionProps,
  Product,
} from "../types";

const initialState: ProductState = {
  isOpen: false,
  products: [],
  ingredients: [],
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
    case GET_INGREDIENT:
      const ingredients = payload?.map((item: Product) => {
        return item?.ingredient?.ingredient_name;
      });
      const _ingredients: any = Array.from(new Set(ingredients));
      return {
        ...state,
        ingredients: _ingredients,
      };
    default:
      return state;
  }
};
