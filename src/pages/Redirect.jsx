import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginActions } from "../redux/modules/loginSlice";
import { cookies } from "../shared/cookies";

const Redirect = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 발급된 인가코드를 백엔드로 넘겨주기 위해 꺼내오는 작업이 필요하다.
  // code라는 이름으로 파라미터 코드 값을 꺼내오려면 아래와 같이 선언하면 된다.
  const code = new URL(window.location.href).searchParams.get("code");

  //   const getKakaoToken = async () => {
  //     try {
  //       const response = axios.post(
  //         `https://kauth.kakao.com/oauth/token`,
  //         `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       );
  //       const token = response.data.access_token;
  //       cookies.set("token", token);
  //     } catch (e) {

  //     }
  //   };

  const authKakaoCode = async (code) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/kakao/callback?code=${code}`
    );
    cookies.set("token", response.headers.authorization, {
      path: "/",
      maxAge: 3540,
    });
    cookies.set("nick", response.data.nick, { path: "/", maxAge: 3540 });
  };

  useEffect(() => {
    authKakaoCode(code);
    dispatch(isLoginActions.login());
    alert("로그인 되었습니다.");
    navigate("/");
    return () => {};
  }, []);

  return <div>로그인 중</div>;
};

export default Redirect;
