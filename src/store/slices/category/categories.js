import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async ({ str }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/categories/main?${str}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const categories = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default categories.reducer;
