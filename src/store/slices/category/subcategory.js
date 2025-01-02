import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSubCategories = createAsyncThunk(
  "category/getSubCategories",
  async ({id, str}, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/categories/sub/${id}?${str}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const subcategory = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategories.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getSubCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getSubCategories.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default subcategory.reducer;
