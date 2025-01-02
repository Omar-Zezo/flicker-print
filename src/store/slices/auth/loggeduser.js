import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLoggedUser = createAsyncThunk(
  "auth/getLoggedUser",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get("/auth/user-data");
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const loggedUser = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoggedUser.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getLoggedUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getLoggedUser.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default loggedUser.reducer;
