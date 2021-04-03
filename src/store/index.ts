import { AppState } from "./../reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const persistedReducer = persistReducer<AppState, any>(
  persistConfig,
  rootReducer
); // create a persisted reducer

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
