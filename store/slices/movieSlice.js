import {createSlice} from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: 'movie',
  movie: {},
  reducers: {
    setMovie(state, action) {
      if (action.payload) {
        state.movie = action.payload;
      }
    },
  }
})

export const { setMovie} = movieSlice.actions;
export default movieSlice.reducer;
