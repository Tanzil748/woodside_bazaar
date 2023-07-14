import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProductType = {
  name: string;
  img: string;
  price: number;
  category: string;
};

// I am using RTK Query as opposed to async thunk because of the easier syntax to manage api call
export const productSlice = createApi({
  reducerPath: "productSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<ProductType, string>({
      // MUST match server route
      query: () => "products",
    }),
  }),
});

// now add "use" before & "Query" after the endpoints builder name   =>  fakeName  =>  useFakeNameQuery
export const { useFetchAllProductsQuery } = productSlice;
