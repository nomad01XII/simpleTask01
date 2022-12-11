import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "users",
        })
    })
})

export const { useGetAllUsersQuery } = userSlice;