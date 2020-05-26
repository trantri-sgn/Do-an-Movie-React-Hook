import { api } from "./index";

const thongTinMaLichChieuService = {
  getMaLichChieu({ maLichChieu }) {
    console.log("aa", maLichChieu);
    return api
      .call()
      .get(
        `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu.malichchieu}`
      );
  },
};

export default thongTinMaLichChieuService;
