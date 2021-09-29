import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./reducers/auth";
import themeReducer from "./reducers/theme";
import productReducer from "./reducers/product";
import searchReducer from "./reducers/search";
import { cartReducer } from "./reducers/cart";
import authModalReducer from "./reducers/authModal";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  product: productReducer,
  search: searchReducer,
  cart: cartReducer,
  authModal: authModalReducer,
});
const persistedReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer
);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
