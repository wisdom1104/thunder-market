import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Column, Row } from "../components/Flex";
import Wrapper from "../components/Wrapper";
import {
  __checkUserEmail,
  __checkUserNick,
  __signUp,
} from "../redux/modules/loginSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 회원가입
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
    if (possibleEmail && possibleNick) {
      const result = await dispatch(__signUp(user));
      if (result.type === "signUp/fulfilled") {
        navigate("/");
      }
    } else {
      alert("중복 검사를 모두 해주세요.");
      return;
    }
  };

  // 이메일 유효성 검사
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

  // 이메일 중복확인
  const [possibleEmail, setPossibleEmail] = useState(false);
  const checkIdHandler = (email) => {
    dispatch(__checkUserEmail(email));
    setPossibleEmail(true);
  };

  // 닉네임 유효성 검사
  const [nicknameMsg, setNicknameMsg] = useState("");
  const validNickname = (e) => {
    const nickname = e.target.value;
    const isValidNickname = /^[가-힣a-zA-Z0-9]{2,15}$/.test(nickname);
    if (isValidNickname) {
      setNicknameMsg(null);
      return;
    } else {
      setNicknameMsg("닉네임은 2~15글자, 한글, 알파벳, 숫자만 입력 가능합니다");
      return;
    }
  };

  // 닉네임 중복확인
  const [possibleNick, setPossibleNick] = useState(false);
  const checkNickHandler = async (nick) => {
    // console.log(possibleNick);
    dispatch(__checkUserNick(nick));
    setPossibleNick(true);
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
      <SignUpPage>
        <SignUpBox>
          <SignUpTitle>본인 정보를 입력해주세요</SignUpTitle>
          <Form onSubmit={submitHandler}>
            <Column>
              <InputBox>
                <InputTitle>이메일</InputTitle>
                <Row style={{ gap: "20px" }}>
                  <Input
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={(e) => {
                      validEmail(e);
                      setUser({ ...user, email: e.target.value });
                    }}
                    placeholder="이메일을 입력해 주세요."
                  />
                  <Btn
                    type="button"
                    onClick={() => checkIdHandler({ email: user.email })}
                  >
                    중복확인
                  </Btn>
                </Row>
                <ValidMsg>{emailMsg}</ValidMsg>
              </InputBox>
              <InputBox>
                <InputTitle>비밀번호</InputTitle>
                <Input
                  type="password"
                  value={user.password}
                  name="password"
                  onChange={(e) => {
                    validPassword(e);
                    setUser({ ...user, password: e.target.value });
                  }}
                  placeholder="비밀번호를 입력해 주세요."
                />
                <ValidMsg>{passwordMsg}</ValidMsg>
              </InputBox>
              <InputBox>
                <InputTitle>비밀번호 확인</InputTitle>
                <Input
                  type="password"
                  value={user.passwordCheck}
                  name="passwordCheck"
                  onChange={onChangePasswordCheck}
                  placeholder="비밀번호를 다시 입력해 주세요."
                />
                <ValidMsg>{passwordCheckPwMsg}</ValidMsg>
              </InputBox>
              <InputBox>
                <InputTitle>닉네임</InputTitle>
                <Row style={{ gap: "20px" }}>
                  <Input
                    type="text"
                    value={user.nick}
                    name="nick"
                    onChange={(e) => {
                      validNickname(e);
                      setUser({ ...user, nick: e.target.value });
                    }}
                    placeholder="닉네임을 입력해 주세요."
                  />
                  <Btn
                    type="button"
                    onClick={() => checkNickHandler({ nick: user.nick })}
                  >
                    중복확인
                  </Btn>
                </Row>
                <ValidMsg>{nicknameMsg}</ValidMsg>
              </InputBox>
              <SignUpBtnBox>
                <Btn>회원가입 완료</Btn>
              </SignUpBtnBox>
            </Column>
          </Form>
        </SignUpBox>
      </SignUpPage>
    </>
  );
}

export default Signup;
const SignUpPage = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 100px 0px;
`;

const SignUpBox = styled.div`
  width: 570px;
  background: rgb(255, 255, 255);
  padding: 60px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
`;

const SignUpTitle = styled.h1`
  margin-bottom: 45px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(63, 63, 63);
`;

const Form = styled.form`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  height: 80px;
`;

const InputTitle = styled.span`
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid rgb(229, 229, 229);
  outline: none;
  appearance: none;
`;

const Btn = styled.button`
  display: inline-flex;
  width: 25%;
  padding: 0px 20px;
  border-radius: 6px;
  background-color: rgb(216, 12, 24);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
  border: none;
  cursor: pointer;
`;

const ValidMsg = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const SignUpBtnBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 50px;
`;
