import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLoginActions, __logIn } from "../redux/modules/loginSlice";

export const useLogin = (payload) => {
  const dispatch = useDispatch();

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
      payload.setIsLoginModal(!payload.isLoginModal);
    }
  };
  return [user, setUser, submitHandler];
};
