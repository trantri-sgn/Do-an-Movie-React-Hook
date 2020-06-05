import { api } from "./index";

const DCService = {
  getPhimDC({ soTrang, soPhanTuTrenTrang }) {
    return api.call().get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP10&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}
      `
    );
  },
  searchPhim({ query }) {
    return api
      .call()
      .get(
        `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10&tenPhim=${query}`
      );
  },
};

export default DCService;
