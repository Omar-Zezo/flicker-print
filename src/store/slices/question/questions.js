import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuestions = createAsyncThunk(
  "question/getQuestions",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/questions`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const questions = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default questions.reducer;
