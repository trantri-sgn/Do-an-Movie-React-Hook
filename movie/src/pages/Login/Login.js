import React from "react";

import {
  StyleLayOut,
  StyleBG,
  StyleContentBox,
  StyleContentBody,
  StyleContentTitle,
  StyleH,
} from "../Login/Login.style";

import { Link } from "react-router-dom";
import { PATHS } from "../../constants";

import { useDispatch } from "react-redux";
import { asynHandleLogin } from "../../store/auth/actions";

import { LoginForm } from "../../components/Login";
import { useNotAuth } from "../../helpers";
import { useHistory } from "react-router-dom";
export default function Login() {
  useNotAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  //cach 1

  // const handleLogin = (formData) => {
  //   const { taiKhoan, matKhau } = formData;
  //   dispatch(actShowLoading());
  //   api
  //     .call()
  //     .post("http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", {
  //       taiKhoan,
  //       matKhau,
  //     })
  //     .then((response) => {
  //       dispatch(actHiddenLoading());
  //     })
  //     .catch((error) => {
  //       console.log("err", error);
  //       dispatch(actHiddenLoading());
  //     });
  // };

  const handleLogin = (formData) => {
    const { taiKhoan, matKhau } = formData;
    dispatch(asynHandleLogin({ taiKhoan, matKhau })).then((res) => {
      console.log("Login", res);
      if (res.ok) {
        history.push(PATHS.HOMEPAGE);
      } else {
        console.log(res.error.message);
      }
    });
  };

  return (
    <StyleLayOut>
      <StyleBG></StyleBG>
      <StyleContentBox>
        <StyleContentBody>
          <StyleContentTitle>
            <StyleH>Sign In</StyleH>
            <Link to={PATHS.RESGISTER}>New user ?</Link>
          </StyleContentTitle>

          <LoginForm handleLogin={handleLogin} />
        </StyleContentBody>
      </StyleContentBox>
    </StyleLayOut>
  );
}
