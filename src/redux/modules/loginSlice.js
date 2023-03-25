import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cookies } from "../../shared/cookies";

//회원가입
export const __signUp = createAsyncThunk("signUp", async (newUser, thunk) => {
  // console.log(newUser);
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, newUser);
    alert(`${newUser.nick} 님 회원가입에 성공하셨습니다!!`);
    return thunk.fulfillWithValue(newUser);
  } catch (e) {
    const errorMsg = e.response.data.msg;
    console.log(errorMsg);
    alert(`${errorMsg}`);
    return thunk.rejectWithValue(e);
  }
});

//이메일 중복 검사
export const __checkUserEmail = createAsyncThunk(
  "users/checkUserEmail",
  async (payload, thunkAPI) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/register/check-email`,
        payload
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 닉네임 중복 검사
export const __checkUserNick = createAsyncThunk(
  "users/checkUserNick",
  async (payload, thunkAPI) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/register/check-nick`,
        payload
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그인
export const __logIn = createAsyncThunk("logIn", async (thisUser, thunk) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      thisUser
    );
    cookies.set("token", response.headers.authorization, { path: "/" });
    return thunk.fulfillWithValue(thisUser);
  } catch (e) {
    console.log(e);
    const errorMsg = e.response.data.msg;
    console.log(errorMsg);
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
      // cookies.remove("nickname");
    },
  },
});

export const isLoginActions = loginSlice.actions;
export default loginSlice.reducer;
