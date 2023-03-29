import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//회원가입
export const useSignUp = (payload) => {
  //회원가입 api
  const signupApi = async (newUser) => {
    // console.log(newUser);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup`,
        newUser
      );
      alert(`${newUser.nick} 님 회원가입에 성공하셨습니다!!`);
      return response.data;
    } catch (error) {
      const errorMsg = error.response.data.msg;
      // console.log(errorMsg);
      alert(`${errorMsg}`);
      return error;
    }
  };
  //회원가입
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    nick: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    // 공란 검사
    if (
      user.email === "" ||
      user.password === "" ||
      user.passwordCheck === "" ||
      user.nick === ""
    ) {
      alert("빈 칸을 작성해 주세요.");
      return;
    }
    if (payload.possibleEmail && payload.possibleNick) {
      await signupApi(user);
      navigate("/");
    } else {
      alert("중복 검사를 모두 해주세요.");
      return;
    }
  };
  return [user, setUser, submitHandler];
};

// 이메일 유효성 검사
export const useValidEmail = () => {
  const [emailMsg, setEmailMsg] = useState("");
  const validEmail = (e) => {
    const email = e.target.value;
    const isValidEmail =
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    if (isValidEmail) {
      setEmailMsg(null);
    } else {
      setEmailMsg("이메일 형식에 맞지 않습니다.");
    }
  };
  return [emailMsg, validEmail];
};

//이메일 중복 검사
export const useCheckUserEmail = () => {
  const checkUserEmail = async (payload) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup/check-email`,
        payload
      );
      const responseMsg = response.data.msg;
      // console.log(responseMsg);
      alert(`${responseMsg}`);
      return response.data;
    } catch (error) {
      const errorMsg = error.response.data.msg;
      // console.log(errorMsg);
      alert(`${errorMsg}`);
      return error;
    }
  };
  const [possibleEmail, setPossibleEmail] = useState(false);
  const checkIdHandler = (email) => {
    checkUserEmail(email);
    setPossibleEmail(true);
  };
  return [possibleEmail, checkIdHandler];
};

// 닉네임 유효성 검사
export const useValidNick = () => {
  const [nickMsg, setNickMsg] = useState("");
  const validNick = (e) => {
    const nick = e.target.value;
    const isValidNick = /^[가-힣a-zA-Z0-9]{2,15}$/.test(nick);
    if (isValidNick) {
      setNickMsg(null);
      return;
    } else {
      setNickMsg("닉네임은 2~15글자, 한글, 알파벳, 숫자만 입력 가능합니다");
      return;
    }
  };
  return [nickMsg, validNick];
};

// 닉네임 중복 검사
export const useCheckUserNick = () => {
  const checkUserNick = async (payload) => {
    // console.log(payload);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup/check-nick`,
        payload
      );
      const responseMsg = response.data.msg;
      // console.log(response.data.msg);
      alert(`${responseMsg}`);
      return response.data;
    } catch (error) {
      const errorMsg = error.response.data.msg;
      // console.log(errorMsg);
      alert(`${errorMsg}`);
      return error;
    }
  };
  const [possibleNick, setPossibleNick] = useState(false);
  const checkNickHandler = async (nick) => {
    checkUserNick(nick);
    setPossibleNick(true);
  };
  return [possibleNick, checkNickHandler];
};

//비밀번호 유효성 검사
export const useValidPassword = () => {
  const [passwordMsg, setPasswordMsg] = useState("");
  const validPassword = (e) => {
    const password = e.target.value;
    const isValidPassword =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,15}$/.test(
        password
      );
    if (isValidPassword) {
      setPasswordMsg(null);
    } else {
      setPasswordMsg(
        "비밀번호는 숫자와 영어 소문자와 특수문자를 사용해 8~15자리로 입력해주세요."
      );
    }
  };
  return [passwordMsg, validPassword];
};

// 비밀번호 일치 검사
export const usePasswordCheck = (payload) => {
  const [passwordCheckPwMsg, setpasswordCheckPwMsg] = useState("");
  const onChangePasswordCheck = (e) => {
    e.preventDefault();
    const checkPw = e.target.value;

    if (payload.length >= 1 && payload !== checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치하지 않습니다.");
    }
    if (payload.length >= 1 && payload === checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치합니다.");
    }
  };
  return [passwordCheckPwMsg, onChangePasswordCheck];
};
