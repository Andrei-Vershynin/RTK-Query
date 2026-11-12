import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/product";

interface RegisterResponse {
    id: number;
    email: string;
}

interface RegisterRequest {
    email: string;
    password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  email: string;
}

export const baseApi = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:8000",
      credentials: "include",
    }),
    
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products"
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
          query: (data) => ({
            url: "/auth/login",
            method: "POST",
            body: data,
          }),
        }),

        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => {
                return {
                    url: "/auth/register",
                    method: "POST",
                    body: data 
                }
            }
        })
    })
})

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation } = baseApi