import { SET_LIST_DC } from "./actions";
import { GET_LICH_BY_ID } from "./actions";
import { GET_He_Thong_Rap_Chieu } from "./actions";
import { GET_Ma_Lich_Chieu } from "./actions";
import { GET_Danh_Sach_Ghe } from "./actions";
import { GET_Thong_Tin_Phim_Trong_Rap } from "./actions";
const intState = {
  listNewsItem: [],
  thongTin: "",
  listHeThongRapChieu: [],
  listLogo: [],
  listDanhSachGHe: [],
};

export default function DCReducer(state = intState, action) {
  switch (action.type) {
    case SET_LIST_DC:
      const newItem = action.payload.items;
      return {
        ...state,
        listNewsItem: [...state.listNewsItem, ...newItem],
      };
    case GET_LICH_BY_ID: {
      return {
        ...state,
        thongTin: action.payload,
      };
    }
    case GET_He_Thong_Rap_Chieu:
      const heThongRap = action.payload.heThongRapChieu;
      return {
        ...state,
        listHeThongRapChieu: [...heThongRap],
      };
    case GET_Ma_Lich_Chieu:
      const maChieuPhim = action.payload.heThongRapChieu;
      return {
        ...state,
      };
    case GET_Thong_Tin_Phim_Trong_Rap:
      const thongTinPhimTrongRap = action.payload.thongTinPhim;
      return {
        ...state,
        thongTinPhimTrongRap,
      };
    case GET_Danh_Sach_Ghe:
      const danhSachGhe = action.payload.danhSachGhe;
      return {
        ...state,
        listDanhSachGHe: [...danhSachGhe],
      };
    default:
      return state;
  }
}
