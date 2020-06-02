import { actShowLoading, actHiddenLoading } from "../appLoading/action";
import { actSetUserInfo } from "../user/actions";

import { Storage } from "../../helpers";
import { StorageUser } from "../../helpers";
import { api } from "../../serrvices";
const nameSpace = "auth";

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;
export const actLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const actLogOut = () => {
  console.log("actLogOut", actLogOut);
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
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
      StorageUser.setUser(tk);
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
