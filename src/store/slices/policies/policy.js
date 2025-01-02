import baseUrl from "@/store/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPrivacyPolicy = createAsyncThunk(
  "policy/getPrivacyPolicy",
  async (_,thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/about/policy`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getTerms = createAsyncThunk(
  "policy/getTerms",
  async (_,thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/about/terms`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getCancellationPolicy = createAsyncThunk(
  "policy/getCancellationPolicy",
  async (_,thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/about/cancellation-policy`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getRefundPolicy = createAsyncThunk(
  "policy/getRefundPolicy",
  async (_,thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await baseUrl.get(`/data/about/refund-policy`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: null,
  error: null,
};

const policy = createSlice({
  name: "policy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get Privacy Policy
    builder.addCase(getPrivacyPolicy.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getPrivacyPolicy.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPrivacyPolicy.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
    //get Terms and Conditions
    builder.addCase(getTerms.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getTerms.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getTerms.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
    //get Cancellation Policy
    builder.addCase(getCancellationPolicy.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCancellationPolicy.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCancellationPolicy.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
    //get Refund Policy
    builder.addCase(getRefundPolicy.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getRefundPolicy.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getRefundPolicy.rejected, (state, action) => {
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default policy.reducer;
