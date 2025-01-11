import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCities = createAsyncThunk(
  "cities/getCities",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/cities/${id}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const cities = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default cities.reducer;
