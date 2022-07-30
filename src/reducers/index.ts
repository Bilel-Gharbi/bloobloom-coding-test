import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import glassesSlice from "./product/productSlice";

const rootReducer = combineReducers({
  uiSlice,
  glassesSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
