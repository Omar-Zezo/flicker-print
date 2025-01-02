import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkEmail = createAsyncThunk(
  "auth/sendEmail",
  async ({ data }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post("/forget-password/check-email", data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const sendEmail = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkEmail.pending, (state) => {
      state.error = null;
    });
    builder.addCase(checkEmail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(checkEmail.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default sendEmail.reducer;
