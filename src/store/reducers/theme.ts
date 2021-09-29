import { TOOGLE_THEME, ThemeState, ActionProps } from "../types";

const initialState: ThemeState = {
  isDark: false,
};
export default (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case TOOGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
