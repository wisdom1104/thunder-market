import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Column } from "../components/Flex";
import Wrapper from "../components/Wrapper";
import { __signUp } from "../redux/modules/loginSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    nick: "",
    email: "",
  });

  // 회원가입
  const submitHandler = async (e) => {
    e.preventDefault();
    // 공란 검사

    if (
      user.username === "" ||
      user.password === "" ||
      user.passwordCheck === "" ||
      user.nick === "" ||
      user.email === ""
    ) {
      alert("빈 칸을 작성해 주세요.");
      return;
    }

    const result = await dispatch(__signUp(user));
    if (result.type === "signUp/fulfilled") {
      navigate("/");
    }
  };

  //아이디 유효성 검사
  const [usernameMsg, setUsernameMsg] = useState("");
  const validUsername = (e) => {
    const username = e.target.value;
    const isValidUsername = /^(?=.*[0-9])(?=.*[a-z]).{4,10}$/.test(username);
    if (isValidUsername) {
      setUsernameMsg(null);
    } else {
      setUsernameMsg(
        "아이디는 영어 소문자랑 숫자를 이용해 4~10자로 입력해주세요."
      );
    }
  };

  //비밀번호 유효성 검사
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
  // 비밀번호 일치 검사
  const [passwordCheckPwMsg, setpasswordCheckPwMsg] = useState("");
  const onChangePasswordCheck = (e) => {
    e.preventDefault();
    const checkPw = e.target.value;

    if (user.password.length >= 1 && user.password !== checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치하지 않습니다.");
    }
    if (user.password.length >= 1 && user.password === checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치합니다.");
    }
  };

  return (
    <>
      {/* <Wrapper> */}
      <Form onSubmit={submitHandler}>
        <Column>
          <span>아이디</span>
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={(e) => {
              validUsername(e);
              setUser({ ...user, username: e.target.value });
            }}
            placeholder="아이디를 입력해 주세요."
          />
          <p>{usernameMsg}</p>

          <span>비밀번호</span>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={(e) => {
              validPassword(e);
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="비밀번호를 입력해 주세요."
          />
          <p>{passwordMsg}</p>

          <span>비밀번호 확인</span>
          <input
            type="password"
            value={user.passwordCheck}
            name="passwordCheck"
            onChange={onChangePasswordCheck}
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          <p>{passwordCheckPwMsg}</p>
          <span>닉네임</span>
          <input
            type="text"
            value={user.nick}
            name="nick"
            onChange={(e) => {
              setUser({ ...user, nick: e.target.value });
            }}
            placeholder="닉네임을 입력해 주세요."
          />
          <span>이메일</span>
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="이메일을 입력해 주세요."
          />
          <button>회원가입 완료</button>
        </Column>
      </Form>
      {/* </Wrapper> */}
    </>
  );
}

export default Signup;
const Form = styled.form``;
