import { SHOW_LOGIN_FORM, HIDE_LOGIN_FORM, ActionProps } from "../types";

interface AuthModalProps {
  showLoginForm: boolean;
}
const initialState: AuthModalProps = {
  showLoginForm: false,
};

export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case SHOW_LOGIN_FORM:
      return {
        ...state,
        showLoginForm: true,
      };
    case HIDE_LOGIN_FORM:
      return {
        ...state,
        showLoginForm: false,
      };
    default:
      return state;
  }
};
