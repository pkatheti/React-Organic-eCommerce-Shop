import { configureStore } from "@reduxjs/toolkit/react";
import { apiSlice } from "./ApiJunction/apiSlice";
import rootSlice from "./RootSlice";

export const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
})

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>

// reducer: {
//     counter: counterReducer,
// [apiSlice.reducerPath]: apiSlice.reducer,
//
//   },