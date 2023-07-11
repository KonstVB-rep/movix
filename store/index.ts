import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./slices/mainSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
