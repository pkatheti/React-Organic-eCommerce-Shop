import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    prepareHeaders(headers) {
    //   headers.set("x-api-key", DOGS_API_KEY);

      return headers;
    },
  }),
    endpoints: builder => ({})
})