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

import swal from "sweetalert2";
export default function Login() {
  useNotAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (formData) => {
    const { taiKhoan, matKhau } = formData;
    dispatch(asynHandleLogin({ taiKhoan, matKhau })).then((res) => {
      console.log("Login", res);
      if (res.ok) {
        history.push(PATHS.HOMEPAGE);
      } else {
        swal
          .fire(res.error.message, "Xem Lại Tài Khoản Hoặc Mật Khẩu", "error")
          .then((resultdata) => {
            window.location.reload();
          });
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
