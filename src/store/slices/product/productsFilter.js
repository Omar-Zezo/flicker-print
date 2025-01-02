import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsFilter = createAsyncThunk(
  "products/getProductsFilter",
  async ({ str, data }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post(`/products?${str}`, data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const productsFilter = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsFilter.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getProductsFilter.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProductsFilter.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default productsFilter.reducer;
