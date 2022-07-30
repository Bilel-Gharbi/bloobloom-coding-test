import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Glasses } from "../../models/Glasses";
import { getProductService } from "../../services/product";
import { GetProductParams } from "../../services/product/interface";
import { RootState } from "../../store";

export interface ProductSlice {
  filters: {
    colors: string[];
    shapes: string[];
    category: string;
  };
  queryFilters: {
    lens_variant_presciptions: string;
    lens_variant_types: string;
    frame_variant_home_trial_available: boolean;
    glass_variant_frame_variant_colour_tag_configuration_names: any;
    Glass_variant_frame_variant_frame_tag_configuration_names: any;
  };
  list: {
    total: number;
    count: number;
    data: Glasses[];
    status: "idle" | "loading" | "failed";
  };
}

const initialState: ProductSlice = {
  queryFilters: {
    lens_variant_presciptions: "fashion",
    lens_variant_types: "classic",
    frame_variant_home_trial_available: false,
    glass_variant_frame_variant_colour_tag_configuration_names: "",
    Glass_variant_frame_variant_frame_tag_configuration_names: "",
  },
  filters: {
    colors: [],
    shapes: [],
    category: "spectacles-women",
  },
  list: {
    total: 0,
    count: 0,
    data: [],
    status: "idle",
  },
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProducts",
  async (query: GetProductParams | any) => {
    const response: any = await getProductService(query);
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addFilterColor(state, { payload }) {
      if (!state.filters.colors.includes(payload))
        state.filters.colors = [...state.filters.colors, payload];
      else
        state.filters.colors = state.filters.colors.filter(
          (color) => color !== payload
        );
    },
    addFilterShape(state, { payload }) {
      if (!state.filters.shapes.includes(payload))
        state.filters.shapes = [...state.filters.shapes, payload];
      else
        state.filters.shapes = state.filters.shapes.filter(
          (shape) => shape !== payload
        );
    },
    addCategory(state, { payload }) {
      state.filters.category = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.list.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.list.status = "idle";
        state.list.count = payload.glasses.length;
        state.list.total = payload.meta.total_count;
        state.list.data = [...payload.glasses];
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.list.status = "failed";
      });
  },
});

export const { addFilterColor, addFilterShape, addCategory } =
  productSlice.actions;

export const productList = (state: RootState) => state.product.list;
export const productSelectedFilters = (state: RootState) =>
  state.product.filters;
export const queryFilters = (state: RootState) => state.product.queryFilters;

export default productSlice.reducer;
