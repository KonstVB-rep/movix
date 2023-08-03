import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/api.js";

export const fetchAllGenres = createAsyncThunk(
  "genresList/fetchAllGenres",
  async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];

    try {
      endPoints.forEach((point) => {
        promises.push(getData(`/genre/${point}/list`));
      });

      return await Promise.all(promises);

    } catch (e) {
      return e.response.data.status_message;
    }
  }
);

const initialState = {
  loading: '',
  error: '',
  all: {},
  tv:[],
  movie:[],
};

const genresSlice = createSlice({
  name: "genresList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllGenres.pending, (state) => {
      state.loading = "loading";
      state.error = '';
    });
    builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
      action.payload.map(({ genres }) => genres.map((item) => state.all[item.id] = item.name));
      state.tv= action.payload[0].genres.map((item => ({label: item.name, value:item.id, filter: 'with_genres'})))
      state.movie =action.payload[1].genres.map((item => ({label: item.name, value:item.id, filter: 'with_genres'})))
      state.loading = "fulfilled";
    });
    builder.addCase(fetchAllGenres.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "fulfilled";
    });
  },
});

export default genresSlice.reducer;
