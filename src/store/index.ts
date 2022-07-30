import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "../reducers/ui/uiSlice";
import productReducer from "../reducers/product/productSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
