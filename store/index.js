import { configureStore } from "@reduxjs/toolkit";

import urlReducer from "./slices/urlSlice";
import genresReducer from "./slices/genresSlice";

export const store = configureStore({
  reducer: {
    urlBaseForImages: urlReducer,
    genres: genresReducer
  },
});

