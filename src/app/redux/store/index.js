import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "app/redux/reducer";

export const store = configureStore({
  reducer: rootReducer,
});
