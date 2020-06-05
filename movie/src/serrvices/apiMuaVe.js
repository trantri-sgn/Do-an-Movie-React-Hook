import { api } from "./index";

const thongTinMaLichChieuService = {
  getMaLichChieu({ malichchieu }) {
    return api
      .call()
      .get(
        `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu.malichchieu}`
      );
  },
};

export default thongTinMaLichChieuService;
