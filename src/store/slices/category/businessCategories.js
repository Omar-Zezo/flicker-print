import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBusinessCategories = createAsyncThunk(
  "category/getBusinessCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/home/business-categories`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const businessCategories = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBusinessCategories.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getBusinessCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getBusinessCategories.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default businessCategories.reducer;
