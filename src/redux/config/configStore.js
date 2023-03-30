import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../modules/cardSlice";
import detailSlice from "../modules/detailSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
    login: loginSlice,
    detail: detailSlice,
  },
});

export default store;
