import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import historyReducer from "./historySlise";
import mealReducer from "./mealSlise";
import profileReducer from "./profileSlise";

const store = configureStore({
  reducer: {
    history: historyReducer,
    meals: mealReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
