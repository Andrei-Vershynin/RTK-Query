import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Post {
  id: number;
  title: string;
  content: string;
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;