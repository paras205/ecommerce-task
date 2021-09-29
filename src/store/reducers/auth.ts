import { SIGN_IN, SET_USER, LOGOUT, AuthState, ActionProps } from "../types";

const initialState: AuthState = {
  user: null,
  authenticated: false,
};

export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case SIGN_IN:
      localStorage.setItem("@userToken", payload?.email);
      return {
        ...state,
        user: payload,
        authenticated: true,
      };
    case SET_USER:
      return {
        ...state,
        authenticated: localStorage.getItem("@userToken") ? true : false,
      };
    case LOGOUT:
      localStorage.removeItem("@userToken");
      return {
        ...state,
        user: null,
        authenticated: false,
      };
    default:
      return state;
  }
};
