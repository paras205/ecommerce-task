import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  EMPTY_CART,
  CartItem,
  ActionProps,
} from "../types";

import {
  removeItemFromCart,
  increaseQuantity,
  calculateSubTotal,
  calculateTotal,
} from "./cart.utils";

import { Reducer } from "redux";

interface CartItemI {
  cartItems: Array<CartItem>;
  deliveryCharge: number;
  subTotal: string | number;
  total: string | number;
}

const initialState: CartItemI = {
  cartItems: [] as CartItem[],
  deliveryCharge: 50,
  subTotal: 0,
  total: 0,
};

export const cartReducer: Reducer<any, ActionProps> = (
  state = initialState,
  { payload, type }: ActionProps
) => {
  switch (type) {
    case ADD_TO_CART: {
      const existingCartItem = state.cartItems.find((cartItem: CartItem) => {
        return cartItem.id === payload.id;
      });
      if (existingCartItem) {
        const addeditem = state.cartItems.map((cartItem: CartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return {
          ...state,
          cartItems: addeditem,
          subTotal: calculateSubTotal(addeditem),
          total: calculateTotal(addeditem, state.deliveryCharge),
        };
      } else {
        const newItem = [...state.cartItems, { ...payload, quantity: 1 }];
        return {
          ...state,
          cartItems: newItem as CartItem[],
          subTotal: calculateSubTotal(newItem),
          total: calculateTotal(newItem, state.deliveryCharge),
        };
      }
    }
    case INCREASE_QUANTITY: {
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, payload) as CartItem[],
        subTotal: calculateSubTotal(increaseQuantity(state.cartItems, payload)),
        total: calculateTotal(
          increaseQuantity(state.cartItems, payload),
          state.deliveryCharge
        ),
      };
    }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload) as CartItem[],
        subTotal: calculateSubTotal(
          removeItemFromCart(state.cartItems, payload)
        ),
        total: calculateTotal(
          removeItemFromCart(state.cartItems, payload),
          state.deliveryCharge
        ),
      };
    }
    case REMOVE_FROM_CART: {
      const removedItem = state.cartItems.filter((cartItem: CartItem) => {
        return cartItem.id !== payload.id;
      });
      return {
        ...state,
        cartItems: removedItem,
        subTotal: calculateSubTotal(removedItem),
        total: calculateTotal(removedItem, state.deliveryCharge),
      };
    }
    case EMPTY_CART: {
      return {
        ...state,
        cartItems: [] as CartItem[],
        deliveryCharge: 50,
        subTotal: "",
        total: "",
      };
    }
    default:
      return state;
  }
};
