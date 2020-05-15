import { authLogin } from "../../serrvices";
import { actShowLoading, actHiddenLoading } from "../appLoading/action";
import { actSetUserInfo } from "../user/actions";

import { Storage } from "../../helpers";

import { api } from "../../serrvices";
const nameSpace = "auth";

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;

export const actLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const asynHandleLogin = ({ taiKhoan, matKhau }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await api.call().post("/api/QuanLyNguoiDung/DangNhap", {
        taiKhoan,
        matKhau,
      });
      dispatch(actHiddenLoading()); // goi dispatch loading ra
      console.log("respone", response);

      const token = response.data.accessToken;
      const tk = response.data.taiKhoan;
      Storage.setToken(token);
      dispatch(actLoginSuccess(token)); // dispatch de lay token
      dispatch(actSetUserInfo(tk)); //dispatch de lay tk
      return {
        ok: true,
      };
    } catch (err) {
      dispatch(actHiddenLoading());
      return {
        ok: false,
        error: err,
      };
    }
  };
};
