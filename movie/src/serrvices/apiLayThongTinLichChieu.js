import { api } from "./index";

const thongTinLichChieuService = {
  getPhimID({ maPhim }) {
    return api
      .call()
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  },
};

export default thongTinLichChieuService;
