import {
  SIGN_IN,
  LOGOUT,
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM,
  SET_USER,
  SignInData,
} from "../types";

export const showLoginForm = () => {
  return {
    type: SHOW_LOGIN_FORM,
  };
};
export const hideLoginForm = () => {
  return {
    type: HIDE_LOGIN_FORM,
  };
};
export const login = (data: SignInData) => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};
export const setUser = () => {
  return {
    type: SET_USER,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
