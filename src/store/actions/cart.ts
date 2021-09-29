import {
  AllDispatchProp,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
  CartItem,
} from "../types";

export const addToCart =
  (item: CartItem) => async (dispatch: AllDispatchProp) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

export const removeFromCart =
  (item: CartItem) => async (dispatch: AllDispatchProp) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

export const increaseQuantity =
  (item: CartItem) => async (dispatch: AllDispatchProp) => {
    dispatch({ type: INCREASE_QUANTITY, payload: item });
  };

export const decreaseQuantity =
  (item: CartItem) => async (dispatch: AllDispatchProp) => {
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };

export const clearCart = () => {
  return {
    type: EMPTY_CART,
  };
};
