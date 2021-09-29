export const SIGN_IN = "SIGN_IN";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

export const SHOW_PRODUCT_FORM = "SHOW_PRODUCT_FORM";
export const HIDE_PRODUCT_FORM = "HIDE_PRODUCT_FORM";
export const SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";
export const HIDE_LOGIN_FORM = "HIDE_LOGIN_FORM";
export const TOOGLE_THEME = "TOOGLE_THEME";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ALL_CART_ITEMS = "GET_ALL_CART_ITEMS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

export interface SignInData {
  email: string;
  password: string;
}
export interface User {
  password: string;
  email: string;
}
export interface AuthState {
  user: User | null;
  authenticated: boolean;
}
export interface ThemeState {
  isDark: boolean;
}
export interface ProductInputProps {
  name: string;
  ingredient_name: string;
  ingredient_quantity: number;
  unit: number;
  imageUrl: string;
  price: number;
  stepsToCook: string;
}
export interface Ingredient {
  ingredient_name: string;
  ingredient_quantity: number;
  unit: number;
}
export interface Product {
  name: string;
  ingredient: Ingredient;
  imageUrl: string;
  price: number;
  stepsToCook: string;
  id?: string;
}
export interface ProductState {
  isOpen: boolean;
  products: Product[];
}

export interface CartItem {
  name: string;
  imageUrl: string;
  price: number;
  id: string | number | undefined;
  quantity: number;
}
export interface Cart {
  items: CartItem[];
  total: number;
  deliveryCharge: number;
  subTotal: number;
}
export type AllDispatchProp = (arg0: {
  type: string;
  payload: any | void;
}) => void;

export type ActionProps = {
  type: any;
  payload: any | void;
};
