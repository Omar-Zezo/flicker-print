import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.post("/auth/logout", {});
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const logout = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutUser.pending, (state) => {
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default logout.reducer;
