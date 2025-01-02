import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPackages = createAsyncThunk(
  "packages/getPackages",
  async ({ str }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/packages?${str}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const packages = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPackages.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getPackages.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPackages.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default packages.reducer;
