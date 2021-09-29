import { SEARCH_PRODUCTS, Product, ActionProps } from "../types";

interface SearchProps {
  products: Product[];
}
const initialState: SearchProps = {
  products: [],
};
export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
