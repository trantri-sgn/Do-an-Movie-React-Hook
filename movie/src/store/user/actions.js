import { actShowLoading, actHiddenLoading } from "../appLoading/action";
import { api } from "../../serrvices";
const nameSpace = "user:";

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR `;

export const actSetUserInfo = (data) => {
  return {
    type: SET_USER_INFOR,
    payload: data,
  };
};

export const asynThongTinTaiKhoan = ({ taiKhoan }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await api
        .call()
        .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", {
          taiKhoan,
        });
      console.log("response", response);
      const thongTin = response.data;
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
