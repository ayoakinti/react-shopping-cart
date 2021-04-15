import { combineReducers } from "redux";

import authReducer from "./modules/authReducer";
import productReducer from "./modules/productReducer";
import categoryReducer from "./modules/categoryReducer";
import cartReducer from "./modules/cartReducer";
import dashboardReducer from "./modules/dashboardReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
  dashboard: dashboardReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
