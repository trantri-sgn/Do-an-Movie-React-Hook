import { api } from "./index";

const thongTinMaLichChieuService = {
  getMaLichChieu({ malichchieu }) {
    console.log("aa", malichchieu);
    return api
      .call()
      .get(
        `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu.malichchieu}`
      );
  },
};

export default thongTinMaLichChieuService;
