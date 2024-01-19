import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppybowlapi";
import PlayersSlice from "../players/PlayersSlice";

export const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    players: PlayersSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
export default store;