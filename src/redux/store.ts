import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mealReducer from "./mealSlise";

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;