

import { configureStore } from "@reduxjs/toolkit/react";
// import counterReducer from './CounterSlice'
import { apiSlice } from "./DemoCounterSlice";
import rootSlice from "./RootSlice";

export const store = configureStore({
    reducer:rootSlice
        // [apiSlice.reducerPath]: apiSlice.reducer,
    ,
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
      },


})

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>

// reducer: {
//     counter: counterReducer,
//    
//   },