import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import dayjs from "dayjs";
// import { phimnene } from "../../helpers";

import { asyncGetDanhSachLichChieuPhimByID } from "../../store/danhSachPhimDC/actions";

import DanhSachHeThong from "../../components/DSHeThong/DanhSachHeThong";
export default function DatVeDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const maPhim = parseInt(id);
  useEffect(() => {
    dispatch(asyncGetDanhSachLichChieuPhimByID({ maPhim })).then((res) => {});
  }, [maPhim, dispatch]);

  const thongTin = useSelector((state) => state.DC.thongTin);

  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);

  const gioChieu = dayjs(new Date(thongTin.ngayKhoiChieu)).format("hh:mm A");
  const ngayChieu = dayjs(new Date(thongTin.ngayKhoiChieu)).format(
    "DD/MM/YYYY"
  );

  return (
    <>
      <div>
        <div className="container" key={thongTin.maPhim}>
          <div className="row">
            <div className="col-6 item">
              <div className="hinhAnh">
                <img
                  src={thongTin.hinhAnh}
                  alt="Girl in a jacket"
                  width="300"
                  height="500"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="thongTinPhim">
                <h3 className="display-4">{thongTin.tenPhim}</h3>
                <p>
                  Nội Dung: <span>{thongTin.moTa}</span>
                </p>
                <p>
                  Ngày Chiếu: <span>{ngayChieu}</span>
                </p>
                <p>
                  Giờ Chiếu: <span>{gioChieu}</span>
                </p>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="danhSachHeThong" key={maHeThong?.maHeThongRap}>
            <h6 className="text-center display-4">Lịch Chiếu</h6>
            <DanhSachHeThong maHeThong={maHeThong} />
          </div>
        </div>
      </div>
    </>
  );
}
