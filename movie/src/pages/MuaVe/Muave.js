import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actSetGheDcChon } from "../../store/datVe/action";
import { asyncGetDanhSachGhe } from "../../store/danhSachPhimDC/actions";
import { asyncPostDatVe } from "../../store/datVe/action";
import { StorageUser } from "../../helpers";

import { useAuth } from "../../helpers";
import Ghe from "./Ghe";
export default function Muave() {
  useAuth();
  const malichchieu = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetDanhSachGhe({ malichchieu }));
  }, [malichchieu, dispatch]);
  const danhSachGhe = useSelector((state) => state.DC.listDanhSachGHe);
  const tri = useSelector(
    (state) => state.DC.thongTinPhimTrongRap?.maLichChieu
  );

  const thongTinPhim = useSelector((state) => state.DC.thongTinPhimTrongRap);

  const gheChon = useSelector((state) => state.DatVe.listDSGhe);
  const [gheDuocChon, setGheDuocChon] = useState(null);

  useEffect(() => {
    if (gheDuocChon) {
      dispatch(actSetGheDcChon(gheDuocChon));
    }
  }, [gheDuocChon, dispatch]);
  //render vo trong
  function renderDanhSachGhe() {
    return danhSachGhe?.map((ghe, i) => {
      return (
        <Ghe setGheDuocChon={setGheDuocChon} ghe={ghe} index={i + 1} key={i} />
      );
    });
  }

  function renderGhe() {
    return gheChon.map((ghe, index) => {
      return (
        <div key={index}>
          <span>Ghế: {ghe.stt}</span>
          <br />
          <span>
            Giá Vé : {ghe.giaVe.toLocaleString()} VNĐ
            <br />
            <p></p>
          </span>
        </div>
      );
    });
  }

  const datVe = useCallback(() => {
    let objectDatVe = {
      maLichChieu: tri,
      danhSachVe: gheChon,
      taiKhoanNguoiDung: StorageUser.getUser(),
    };
    dispatch(asyncPostDatVe(objectDatVe));
  }, [gheChon, tri, dispatch]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8  text-center">
            <img src="../img/screen-thumb.png" alt="" />
            <div className="mt-3 text-center">{renderDanhSachGhe()}</div>
          </div>
          <div className="col-4">
            <h3 className="mt-3 text-center text-danger">Thông tin đặt vé</h3>
            <table className="table">
              <thead>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Tên Phim:
                  </th>
                  <th
                    colSpan="2"
                    className="text-primary text-center"
                    align="center"
                  >
                    {thongTinPhim && thongTinPhim.tenPhim}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="2"
                    className="text-success text-center "
                    align="center"
                  >
                    <img
                      src={thongTinPhim && thongTinPhim.hinhAnh}
                      alt="hinhanh"
                      width={150}
                      height={250}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Tên Cụm Rạp:
                  </th>
                  <th className="text-white" style={{ whiteSpace: "nowrap" }}>
                    {thongTinPhim && thongTinPhim.tenCumRap}
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Rạp:
                  </th>
                  <th className="text-white">
                    {thongTinPhim && thongTinPhim.tenRap}
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Ngày Giờ Chiếu:
                  </th>
                  <th className="text-white">
                    {thongTinPhim && thongTinPhim.ngayChieu} -
                    {thongTinPhim && thongTinPhim.gioChieu}
                  </th>
                </tr>
                <tr>
                  <th
                    className="bold"
                    style={{ whiteSpace: "nowrap", verticalAlign: "top" }}
                  >
                    Ghế Đang Chọn:
                  </th>
                  <th className="text-white">{renderGhe()}</th>
                </tr>
                <tr>
                  <th
                    className="bold"
                    style={{ whiteSpace: "nowrap", verticalAlign: "top" }}
                  >
                    Tổng Tiền:
                  </th>
                  <th className="text-white">
                    {gheChon
                      .reduce((tongTien, ghe) => {
                        return (tongTien += ghe.giaVe);
                      }, 0)
                      .toLocaleString()}{" "}
                    VNĐ
                  </th>
                </tr>
                <tr>
                  <th colSpan="2">
                    <button className="btn btn-danger" onClick={datVe}>
                      Đặt Vé
                    </button>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
