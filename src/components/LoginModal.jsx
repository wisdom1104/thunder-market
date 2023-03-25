import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isLoginActions, __logIn } from "../redux/modules/loginSlice";
import { Column } from "./Flex";

function LoginModal({ isLoginModal, setIsLoginModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(__logIn(user));
    if (response.type === "logIn/fulfilled") {
      dispatch(isLoginActions.login());
      alert("로그인 되었습니다.");
      setIsLoginModal(!isLoginModal);
    }
  };

  return (
    <>
      {
        isLoginModal === true ? (
          <ModalBackground
            onClick={() => {
              setIsLoginModal(!isLoginModal);
            }}
          >
            <Modal onClick={(e) => e.stopPropagation()}>
              <Column>
                <ModalInnerContent>
                  <Img src="https://m.bunjang.co.kr/pc-static/resource/56db3dd43075482b1d31.png" />
                  <Title>번개장터로 중고거래 시작하기</Title>
                  <SubTitle>간편하게 중고거래 시작하기</SubTitle>
                  <CacaoLogin>
                    <CacaoBtn
                      onClick={() =>
                        window.open(
                          "https://kauth.kakao.com/oauth/authorize?client_id=8556f063804f3a560b2aa9a26c924279&redirect_uri=http://3.35.117.161/kakao/callback&response_type=code",
                          "_blank"
                        )
                      }
                    >
                      <CacaoImg src="https://m.bunjang.co.kr/pc-static/resource/7bf83f72cf54461af573.png" />
                      카카오로 이용하기
                    </CacaoBtn>
                  </CacaoLogin>
                  <LoginForm onSubmit={submitHandler}>
                    <Input
                      type="email"
                      placeholder="이메일을 입력해주세요."
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                    <Input
                      type="password"
                      placeholder="비밀번호를 입력해주세요."
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                    <BtnBox>
                      <LoginBtn type="submit">Login</LoginBtn>
                      <SignUpBtn
                        type="button"
                        onClick={() => {
                          navigate(`/signup`);
                        }}
                      >
                        SignUp
                      </SignUpBtn>
                    </BtnBox>
                  </LoginForm>
                </ModalInnerContent>
              </Column>
              <ModalBtn
                onClick={() => {
                  setIsLoginModal(!isLoginModal);
                }}
              >
                <BtnImg src="https://m.bunjang.co.kr/pc-static/resource/ee442d3dd827628bc5fe.png" />
              </ModalBtn>
            </Modal>
          </ModalBackground>
        ) : null //기계역할
      }
    </>
  );
}

export default LoginModal;

const ModalInnerContent = styled.div`
  padding-top: 40px;
`;

const Img = styled.img`
  display: block;
  margin: auto auto 10px;
  width: 30px;
  height: 34px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.div`
  line-height: 1.5;
  margin-bottom: 35px;
  text-align: center;
`;

const CacaoLogin = styled.form`
  padding: 0px 70px;
  margin-bottom: 12px;
`;

const CacaoBtn = styled.button`
  width: 100%;
  height: 38px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 7px 0px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 12px;
  position: relative;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #3b1e1e;
    color: white;
  }
`;

const CacaoImg = styled.img`
  position: absolute;
  top: calc(50% - 12px);
  left: 35px;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LoginForm = styled.form`
  padding: 0px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  height: 38px;
  width: 100%;
  padding: 0px 10px;
  border: none;
  border-bottom: 1px solid rgb(229, 229, 229);
  background-color: transparent;
  outline: none;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
`;

const LoginBtn = styled.button`
  height: 38px;
  padding: 0px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: rgb(216, 12, 24);
`;

const SignUpBtn = styled.button`
  height: 38px;
  border: none;
  font-weight: 600;
  font-size: 12px;
  color: gray;
  background-color: transparent;
  text-decoration-line: underline;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
`;

const Modal = styled.div`
  background: rgb(247, 247, 247);
  width: 420px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 50px 0px;
  position: relative;
`;

const ModalBtn = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
`;

const BtnImg = styled.img`
  width: 24px;
  height: 24px;
`;
