import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const resetNewPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ data }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post("/forget-password/reset-password", data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const resetPassword = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetNewPassword.pending, (state) => {
      state.error = null;
    });
    builder.addCase(resetNewPassword.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(resetNewPassword.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default resetPassword.reducer;
