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
import dayjs from "dayjs";
import { Row, Col } from "antd";

export default function tesst() {
  const thongTin = useSelector((state) => state.DC.thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("thongTin", thongTin);
  const ngayKhoiChieu = dayjs(new Date(thongTin.ngayKhoiChieu)).format(
    "DD/MM/YYYY"
  );
  console.log(dayjs(new Date(thongTin.ngayKhoiChieu)).format("DD/MM/YYYY"));
  return (
    <div>
      {maHeThong.cumRapChieu.map((cumRap) => {
        return <h1>{cumRap.tenHeThongRap}</h1>;
      })}
    </div>
  );
}
