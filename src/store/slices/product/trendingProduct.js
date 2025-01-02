import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTrendingProduct = createAsyncThunk(
  "product/getTrendingProduct",
  async (category_id_trend_request, thunkApi) => {
    console
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/home/trending-product?category_id_trend_request=${category_id_trend_request}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const trendingProduct = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingProduct.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getTrendingProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getTrendingProduct.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default trendingProduct.reducer;
