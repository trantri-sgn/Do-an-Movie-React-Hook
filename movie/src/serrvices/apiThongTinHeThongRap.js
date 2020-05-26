import { api } from "./index";

const thongTinHeThongRapService = {
  getLogo() {
    return api.call().get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
};

export default thongTinHeThongRapService;
