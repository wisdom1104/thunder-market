import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cookies } from "../../shared/cookies";

//로그인
export const __logIn = createAsyncThunk("logIn", async (thisUser, thunk) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      thisUser
    );
    cookies.set("token", response.headers.authorization, {
      path: "/",
      maxAge: 3540,
    });
    cookies.set("nick", response.data.nick, { path: "/", maxAge: 3540 });
    return thunk.fulfillWithValue(thisUser);
  } catch (e) {
    // console.log(e);
    const errorMsg = e.response.data.msg;
    // console.log(errorMsg);
    alert(`${errorMsg}`);
    return thunk.rejectWithValue(e);
  }
});



const initialState = {
  isLogin: cookies.get("token") ? true : false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      cookies.remove("token");
      cookies.remove("nick");
    },
  },
  extraReducers: {},
});

export const isLoginActions = loginSlice.actions;
export default loginSlice.reducer;
