import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPackagesHome = createAsyncThunk(
  "packagesHome/getPackagesHome",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/home/best-packages`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const packagesHome = createSlice({
  name: "packagesHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPackagesHome.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getPackagesHome.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPackagesHome.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default packagesHome.reducer;
