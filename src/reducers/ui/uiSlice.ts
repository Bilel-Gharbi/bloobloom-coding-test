import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UiSlice {
  showSideBar: boolean;
  showColorBar: boolean;
  showShapeBar: boolean;
  selectedColor: string[];
  selectedShape: string[];
  selectedCategory: string[];
}

const initialState: UiSlice = {
  showSideBar: false,
  showColorBar: false,
  showShapeBar: false,
  selectedColor: [],
  selectedCategory: [],
  selectedShape: [],
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideBar(state, { payload }) {
      if (payload !== undefined) state.showSideBar = payload;
      else state.showSideBar = !state.showSideBar;
    },
    toggleColorBar(state) {
      state.showColorBar = !state.showColorBar;
    },
    toggleShapeBar(state) {
      state.showShapeBar = !state.showShapeBar;
    },
    // selectColor(state, { payload }) {
    //   state.selectedColor = [payload];
    // },
    // selectCategory(state, { payload }) {
    //   state.selectedCategory = [payload];
    // },
    // selectShape(state, { payload }) {
    //   state.selectedShape = [payload];
    // },
  },
});

export const { toggleSideBar, toggleColorBar, toggleShapeBar } =
  uiSlice.actions;

export const isSidebarOpen = (state: RootState) => state.ui.showSideBar;
export const isColorFilterActive = (state: RootState) => state.ui.showColorBar;
export const isShapeFilterActive = (state: RootState) => state.ui.showShapeBar;

export default uiSlice.reducer;
