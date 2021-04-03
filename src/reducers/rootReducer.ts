import { combineReducers } from "redux";

import authReducer from "./modules/authReducer";
import productReducer from "./modules/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
