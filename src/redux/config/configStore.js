import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../modules/cardSlice";
import itemSlice from "../modules/itemSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    item: itemSlice,
    cards: cardSlice,
    login: loginSlice,
  },
});

export default store;
