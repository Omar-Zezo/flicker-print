import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/products/${id}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const productDetails = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default productDetails.reducer;
