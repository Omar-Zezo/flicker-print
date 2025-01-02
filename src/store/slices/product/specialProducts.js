import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSpecialProducts = createAsyncThunk(
  "product/getSpecialProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/home/special-products`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const specialProducts = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecialProducts.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getSpecialProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getSpecialProducts.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default specialProducts.reducer;
