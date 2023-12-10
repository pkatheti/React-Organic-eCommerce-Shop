import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

export interface Post {
  productname: string;
  price: string;
  productimage: string;
  quantity: string;
  usermail: string;
}

export interface Delete {
   _id : string
  }
  



// interface ApiResponse<T> {
//     resp: T;
//     status_Message: string;
//     status_code: number;
//   }

//   interface Pet {
//     _id: string;
//     image: string;
//     category: string;
//     description: string;
//     price: string;
//     title: string;
//     discount: number;
//     __v: number;
//   }
//   <ApiResponse<Pet[]>, number | void>


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query({
        query() {
          return `pets`;
        },
      }),

      createItem: builder.mutation<Post, Partial<Post>>({
        query: (newItem) => ({
          url: "addtocart",
          method: "POST",
          body: newItem,
        }),
      }),
      deleteItem: builder.mutation<Delete, Partial<Delete>>({
        query: (newItem) => ({
          url: "deletecartitem",
          method: "DELETE",
          body: newItem,
        }),
        
      }),
    };
  },
});

export const { useFetchBreedsQuery, useCreateItemMutation, useDeleteItemMutation } = apiSlice;






