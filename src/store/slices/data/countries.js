import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/countries`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const countries = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default countries.reducer;
