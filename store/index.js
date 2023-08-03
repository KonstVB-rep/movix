import { configureStore } from "@reduxjs/toolkit";

import genresReducer from "./slices/genresSlice";
import urlReducer from "./slices/urlSlice";

export const store = configureStore({
  reducer: {
    urlBaseForImages: urlReducer,
    genres: genresReducer
  },
});

