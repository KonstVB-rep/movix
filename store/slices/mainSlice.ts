import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getApiConfiguration(state, action) {
      state.url = action.payload;
    },
    getGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = mainSlice.actions;
export default mainSlice.reducer;
