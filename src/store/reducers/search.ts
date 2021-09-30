import {
  SEARCH_PRODUCTS,
  SHOW_SEARCH_FORM,
  HIDE_SEARCH_FORM,
  Product,
  ActionProps,
} from "../types";

interface SearchProps {
  products: Product[];
  showSearchForm: boolean;
}
const initialState: SearchProps = {
  products: [],
  showSearchForm: false,
};
export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SHOW_SEARCH_FORM:
      return {
        ...state,
        showSearchForm: true,
      };
    case HIDE_SEARCH_FORM:
      return {
        ...state,
        showSearchForm: false,
      };
    default:
      return state;
  }
};
