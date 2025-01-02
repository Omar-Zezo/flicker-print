import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getSettings = createAsyncThunk(
    "setting/getSettings", 
    async (_,thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/data/settings")
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const settings = createSlice({
    name: "setting",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSettings.pending, (state) => {
            state.error = null
        })
        builder.addCase(getSettings.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getSettings.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default settings.reducer
