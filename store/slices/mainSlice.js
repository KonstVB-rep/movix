import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/api.js";

const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";


export const fetchUrl = createAsyncThunk(
  "main/fetchUrl",
  async () => {
    return getData('/configuration')
  }
);

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
  url: null,
  urlLoading: '',
  urlError: '',
  genres: {},
  genresLoading: "",
  genresError: "",
};

const mainSlice = createSlice({
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
    builder.addCase(fetchUrl.pending, (state, action) => {
      state.urlLoading = "loading";
      state.urlError = '';
    });
    builder.addCase(fetchUrl.fulfilled, (state, action) => {
      state.url = {
        backdrop: `${action.payload.images?.secure_base_url}original`,
        poster: `${action.payload.images?.secure_base_url}original`,
        profile: `${action.payload.images?.secure_base_url}original`,
      };
      state.urlLoading = "fulfilled";
    });
    builder.addCase(fetchUrl.rejected, (state, action) => {
      console.log(action.payload)
      state.urlError = action.payload;
      state.urlLoading = "fulfilled";
    });
    builder.addCase(fetchAllGenres.pending, (state, action) => {
      state.genresLoading = "loading";
      state.genresError = '';
    });
    builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoading = "fulfilled";
    });
    builder.addCase(fetchAllGenres.rejected, (state, action) => {
      state.genresError = action.payload;
      state.genresLoading = "fulfilled";
    });
  },
});

export const { getApiConfiguration, getGenres } = mainSlice.actions;
export default mainSlice.reducer;
