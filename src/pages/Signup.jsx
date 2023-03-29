import React from "react";
import styled from "styled-components";
import { Column, Row } from "../components/Flex";
import {
  useCheckUserEmail,
  useCheckUserNick,
  usePasswordCheck,
  useSignUp,
  useValidEmail,
  useValidNick,
  useValidPassword,
} from "../hooks/useSignUp";

function Signup() {
  // 이메일 유효성 검사
  const [emailMsg, validEmail] = useValidEmail();

  // 이메일 중복확인
  const [possibleEmail, checkIdHandler] = useCheckUserEmail();

  // 닉네임 유효성 검사
  const [nickMsg, validNick] = useValidNick();

  // 닉네임 중복확인
  const [possibleNick, checkNickHandler] = useCheckUserNick();

  // 회원가입
  const [user, setUser, submitHandler] = useSignUp({
    possibleEmail,
    possibleNick,
  });

  //비밀번호 유효성 검사
  const [passwordMsg, validPassword] = useValidPassword();

  // 비밀번호 일치 검사
  const [passwordCheckPwMsg, onChangePasswordCheck] = usePasswordCheck(
    user.password
  );

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
                      validNick(e);
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
                <ValidMsg>{nickMsg}</ValidMsg>
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
