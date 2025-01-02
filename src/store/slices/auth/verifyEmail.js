import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkVerifyEmail = createAsyncThunk(
  "auth/checkVerifyEmail",
  async ({ data }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post("/auth/verify-email", data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const verifyEmail = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkVerifyEmail.pending, (state) => {
      state.error = null;
    });
    builder.addCase(checkVerifyEmail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(checkVerifyEmail.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default verifyEmail.reducer;
