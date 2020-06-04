import { api } from "./index";

const thongTinTaiKhoanService = {
  taiKhoan({ taiKhoan }) {
    return api
      .call()
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan });
  },
};

export default thongTinTaiKhoanService;
