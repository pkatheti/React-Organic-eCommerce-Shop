import { apiSlice } from "../apiSlice";

export interface Post {
  productname: string;
  price: string;
  productimage: string;
  quantity: string;
  usermail: string;
}
export interface Delete {
  _id: string;
}

export const testingApiSlice = apiSlice.injectEndpoints({
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

export const {
  useFetchBreedsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
} = testingApiSlice;
