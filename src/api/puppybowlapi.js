import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf"
   }),
 
    endpoints: (builder) => ({
   
      getPlayer: builder.query({ query: (id) => `/players/${id}` }),

      getPlayers: builder.query({
      query: ()=> '/players'
    }),
    addPlayer: builder.mutation({
      query: (playerData) => ({
        url: "/players",
        method: "POST",
        body: playerData,
      }),
    }),


  }),
})
  export const {useGetPlayerQuery, useGetPlayersQuery, useAddPlayerMutation} =puppyBowlApi;

 