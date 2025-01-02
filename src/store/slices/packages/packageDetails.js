import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPackage= createAsyncThunk(
  "packages/getPackage",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/packages/${id}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const packageDetails = createSlice({
  name: "packages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPackage.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getPackage.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPackage.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default packageDetails.reducer;
