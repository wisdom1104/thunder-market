import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../modules/cardSlice";
import itemSlice from "../modules/itemSlice";

const store = configureStore({
  reducer: {
    item: itemSlice,
    cards: cardSlice,
  },
});

export default store;
