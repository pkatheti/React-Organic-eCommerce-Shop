

import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from './CounterSlice'


export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState >
