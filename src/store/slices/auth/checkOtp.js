import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkOtpCode = createAsyncThunk(
  "auth/checkOtp",
  async ({ data }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post("/forget-password/check-otp", data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const checkOtp = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkOtpCode.pending, (state) => {
      state.error = null;
    });
    builder.addCase(checkOtpCode.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(checkOtpCode.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default checkOtp.reducer;
