import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleHeaderDetailRow,
  StyleHeaderDetailLi,
  StyleHeaderDetailDivLi,
  StyleHeaderDetailDivImg,
  StyleHeaderDetailDivLi2,
  StyleHeaderDetailDivLi3,
} from "./HeaderDetailPhim.style";
import "../../sass/Layout/DetailPhim/_DetailPhim.scss";
import DanhSachHeThong from "../../components/DSHeThong/DanhSachHeThong";
import dayjs from "dayjs";
import { Row, Col } from "antd";

export default function HeaderDetailPhim() {
  const thongTin = useSelector((state) => state.DC.thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("thongTin", thongTin);
  const ngayKhoiChieu = dayjs(new Date(thongTin.ngayKhoiChieu)).format(
    "DD/MM/YYYY"
  );
  console.log(dayjs(new Date(thongTin.ngayKhoiChieu)).format("DD/MM/YYYY"));

  console.log("maHEThong", maHeThong);

  let newArray = maHeThong.filter((e, index, maHeThong) => {
    console.log("fdfdfd", (e, index, maHeThong));
  });
  console.log("newArray", newArray);
  let phim = maHeThong.filter((phim, index) => phim.maHeThongRap === "CGV");
  console.log("phim", phim);
  let ma = maHeThong.map((ma, index) => ma.cumRapChieu);
  console.log("ma2", ma);

  return (
    <StyleHeaderDetailRow>
      <Col span={6}>
        <ul>
          {maHeThong.map((ma) => {
            return <li key={ma.maHeThongRap}>{ma.tenHeThongRap}</li>;
          })}
        </ul>
      </Col>
      <Col span={18}></Col>
    </StyleHeaderDetailRow>
  );
}
