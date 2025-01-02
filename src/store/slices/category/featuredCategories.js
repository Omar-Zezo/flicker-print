import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFeaturedCategories = createAsyncThunk(
  "category/getFeaturedCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/home/featured-categories`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const featuredCategories = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeaturedCategories.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getFeaturedCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getFeaturedCategories.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default featuredCategories.reducer;
