import { DCService } from "../../serrvices";
import { actShowLoading, actHiddenLoading } from "../appLoading/action";
import { thongTinLichChieuService } from "../../serrvices";

import { thongTinMaLichChieuService } from "../../serrvices";

const nameSpace = "DC";

export const SET_LIST_DC = `${nameSpace}SET_LIST_DC`;

export const GET_LICH_BY_ID = `${nameSpace}GET_LICH_BY_ID`;

export const GET_He_Thong_Rap_Chieu = `${nameSpace}GET_He_Thong_Rap_Chieu`;

export const GET_Ma_Lich_Chieu = `${nameSpace}GET_Ma_Lich_Chieu`;

export const GET_Thong_Tin_Phim_Trong_Rap = `${nameSpace}GET_Thong_Tin_Phim_Trong_Rap`;
export const GET_Ma = `${nameSpace}GET_Ma`;
export const GET_Danh_Sach_Ghe = `${nameSpace}GET_Danh_Sach_Ghe`;

export const SET_SEARCH_RESULT = `${nameSpace}SET_SEARCH_RESULT`;

export const actSetListDC = ({ items }) => ({
  type: SET_LIST_DC,
  payload: { items },
});

export const actSetListById = ({
  tenPhim,
  hinhAnh,
  maPhim,
  moTa,
  ngayKhoiChieu,
}) => {
  return {
    type: GET_LICH_BY_ID,
    payload: { tenPhim, hinhAnh, maPhim, moTa, ngayKhoiChieu },
  };
};

export const actSetHeThongRapChieu = ({ heThongRapChieu }) => ({
  type: GET_He_Thong_Rap_Chieu,
  payload: { heThongRapChieu },
});

export const actSetMaLichChieu = ({ malichchieu }) => ({
  type: GET_He_Thong_Rap_Chieu,
  payload: { malichchieu },
});
export const actSetThongTinPhimTrongRap = ({ thongTinPhim }) => ({
  type: GET_Thong_Tin_Phim_Trong_Rap,
  payload: { thongTinPhim },
});

export const actSetDanhSachGhe = ({ danhSachGhe }) => ({
  type: GET_Danh_Sach_Ghe,
  payload: { danhSachGhe },
});

//act search
export const actSetSearch = ({ tenPhim }) => ({
  type: SET_SEARCH_RESULT,
  payload: { tenPhim },
});

export const asyncGetDanhSachDC = ({
  soTrang = 1,
  soPhanTuTrenTrang = 10,
} = {}) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await DCService.getPhimDC({
        soTrang,
        soPhanTuTrenTrang,
      });
      dispatch(actHiddenLoading());
      const items = response.data.items;
      dispatch(actSetListDC({ items }));
      return {
        ok: true,
        data: response.data.items,
      };
    } catch (err) {
      return {
        ok: false,
        error: err,
      };
    }
  };
};

export const asyncGetDanhSachLichChieuPhimByID = ({ maPhim }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await thongTinLichChieuService.getPhimID({ maPhim });

      //
      const test = response.data;
      dispatch(actSetListById(test));
      dispatch(actSetHeThongRapChieu(test));
      dispatch(actHiddenLoading());
    } catch (err) {
      return {
        ok: false,
        error: err.message,
      };
    }
  };
};

export const asyncGetDanhSachGhe = ({ malichchieu }) => {
  return async (dispatch) => {
    try {
      const response = await thongTinMaLichChieuService.getMaLichChieu({
        malichchieu,
      });
      // console.log("respone", response);
      //
      const res = response.data;

      // console.log("danhSachGhe", res);

      dispatch(actSetDanhSachGhe(res));
      dispatch(actSetThongTinPhimTrongRap(res));
      //  dispatch(actSetListById(test));
      //   dispatch(actSetHeThongRapChieu(test));
    } catch (err) {
      return {
        ok: false,
        error: err.message,
      };
    }
  };
};

//asyn search
export const asyncGetListSearch = ({ query } = {}) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await DCService.searchPhim({ query });
      dispatch(actHiddenLoading());
      const tenPhim = response.data;
      console.log("tenPhim", response);

      dispatch(actSetSearch({ tenPhim }));
    } catch (err) {
      return {
        ok: false,
        error: err,
      };
    }
  };
};
