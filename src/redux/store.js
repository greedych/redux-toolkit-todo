import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/index";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
