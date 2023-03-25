import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cards: [],
  isLoading: false,
  error: null,
};

// 게시물 조회 함수
export const __getCards = createAsyncThunk(
  "__getCards",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시물 조회 Reducer -------------------------------
    [__getCards.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [__getCards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.cards = action.payload;
    },
    [__getCards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = cardSlice.actions;
export default cardSlice.reducer;
