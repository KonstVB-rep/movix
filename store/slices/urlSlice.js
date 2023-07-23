import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/api.js";

export const fetchUrl = createAsyncThunk(
  "main/fetchUrl",
  async () => {
    return getData('/configuration')
  }
);


const initialState = {
  url: null,
  loading: 'loading',
  error: '',
};

const urlSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUrl.pending, (state, action) => {
      state.loading = "loading";
      state.error = '';
    });
    builder.addCase(fetchUrl.fulfilled, (state, action) => {
      state.url = {
        backdrop: `${action.payload.images?.secure_base_url}original`,
        poster: `${action.payload.images?.secure_base_url}original`,
        profile: `${action.payload.images?.secure_base_url}original`,
      };
      state.loading = "fulfilled";
    });
    builder.addCase(fetchUrl.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "fulfilled";
    });
  },
});

export default urlSlice.reducer;
