import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mealReducer from "./mealSlise";
import profileReducer from "./profileSlise";

const store = configureStore({
  reducer: {
    meals: mealReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
