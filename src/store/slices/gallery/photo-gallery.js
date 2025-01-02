import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGalleryPhoto = createAsyncThunk(
  "gallery/getGalleryPhoto",
  async ({ str }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/photo-gallery?${str}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const galleryPhoto = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalleryPhoto.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getGalleryPhoto.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getGalleryPhoto.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default galleryPhoto.reducer;
