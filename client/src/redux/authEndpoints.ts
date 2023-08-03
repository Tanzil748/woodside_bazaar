import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authEndpoints = createApi({
  reducerPath: "authEndpoints",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api/v1/auth/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: {
        username: string;
        email: string;
        password: string;
        jwtToken: string;
      }) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: {
        username: string;
        email: string;
        password: string;
        jwtToken: string;
      }) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// REMINDER: add "use" before & "mutation" after the endpoints builder name   =>  fakeName  =>  useFakeNameMutation
export const { useRegisterMutation, useLoginMutation } = authEndpoints;
