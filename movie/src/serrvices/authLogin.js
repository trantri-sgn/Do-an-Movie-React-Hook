import { api } from "./index";

const authLogin = {
  login({ taiKhoan, matKhau }) {
    return api
      .call()
      .post("/api/QuanLyNguoiDung/DangNhap", { taiKhoan, matKhau });
  },
};

export default authLogin;
 