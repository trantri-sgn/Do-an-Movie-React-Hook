import { api } from "./index";

const DCService = {
  getPhimDC({ soTrang, soPhanTuTrenTrang }) {
    return api.call().get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}
      `
    );
  },
};

export default DCService;
