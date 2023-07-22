import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/api.js";

export const fetchAllGenres = createAsyncThunk(
  "main/fetchAllGenres",
  async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    try {
      endPoints.forEach((point) => {
        promises.push(getData(`/genre/${point}/list`));
      });

      const data = await Promise.all(promises);

      data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
      });
      return allGenres;

    } catch (e) {
      return e.response.data.status_message;
    }
  }
);

const initialState = {
  loading: '',
  error: '',
  genres: {},
};

const genresSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getApiConfiguration(state, action) {
      if (action.payload) {
        state.url = action.payload;
      }
    },
    getGenres(state, action) {
      if (action.payload) {
        state.genres = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllGenres.pending, (state, action) => {
      state.loading = "loading";
      state.error = '';
    });
    builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.loading = "fulfilled";
    });
    builder.addCase(fetchAllGenres.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "fulfilled";
    });
  },
});

export const { getGenres } = genresSlice.actions;
export default genresSlice.reducer;
