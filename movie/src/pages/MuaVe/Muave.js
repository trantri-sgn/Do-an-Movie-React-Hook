import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  console.log("maLichChieu", malichchieu);
  const history = useHistory();
  useEffect(() => {
    console.log("phimId=", malichchieu);
    dispatch(asyncGetDanhSachGhe({ malichchieu })).then((res) => {
      console.log("res", res);
    });
  }, [malichchieu]);

  const danhSachGhe = useSelector((state) => state.DC.listDanhSachGHe);
  const tri = useSelector(
    (state) => state.DC.thongTinPhimTrongRap?.maLichChieu
  );

  const thongTinPhim = useSelector((state) => state.DC.thongTinPhimTrongRap);
  console.log("thongTinPhim", thongTinPhim);

  const gheChon = useSelector((state) => state.DatVe.listDSGhe);
  const [gheDuocChon, setGheDuocChon] = useState(null);
  console.log("gheChon", gheChon);

  useEffect(() => {
    if (gheDuocChon) {
      dispatch(actSetGheDcChon(gheDuocChon));
    }
  }, [gheDuocChon]);
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
  }, [gheChon, tri]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8  text-center">
            <div className="manHinh mt-3">Màn hình</div>
            <div className="mt-3 text-center">{renderDanhSachGhe()}</div>
          </div>
          <div className="col-4">
            <h3 className="mt-3 text-center">Thông tin đặt vé</h3>
            <table className="table">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="text-success text-center display-4"
                    align="center"
                  >
                    {thongTinPhim && thongTinPhim.tenPhim}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="2"
                    className="text-success text-center display-4"
                    align="center"
                  >
                    <img
                      src={thongTinPhim && thongTinPhim.hinhAnh}
                      width={100}
                      height={100}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Tên cụm rạp
                  </th>
                  <th className="text-success" style={{ whiteSpace: "nowrap" }}>
                    {thongTinPhim && thongTinPhim.tenCumRap}
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Rạp
                  </th>
                  <th className="text-success">
                    {thongTinPhim && thongTinPhim.tenRap}
                  </th>
                </tr>
                <tr>
                  <th className="bold" style={{ whiteSpace: "nowrap" }}>
                    Ngày giờ chiếu
                  </th>
                  <th className="text-success">
                    {thongTinPhim && thongTinPhim.ngayChieu} -
                    {thongTinPhim && thongTinPhim.gioChieu}
                  </th>
                </tr>
                <tr>
                  <th
                    className="bold"
                    style={{ whiteSpace: "nowrap", verticalAlign: "top" }}
                  >
                    Ghế đang chọn
                  </th>
                  <th className="text-success">{renderGhe()}</th>
                </tr>
                <tr>
                  <th
                    className="bold"
                    style={{ whiteSpace: "nowrap", verticalAlign: "top" }}
                  >
                    Tổng tiền
                  </th>
                  <th className="text-success">
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
                      Đặt vé
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
