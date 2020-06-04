import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { get } from "lodash";
import { Breadcrumb, Layout, Menu } from "antd";
import { Tab, Row, Col, Nav } from "react-bootstrap";

import dayjs from "dayjs";
// import { phimnene } from "../../helpers";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { PATHS } from "../../constants";
import {
  asyncGetLogo,
  asyncGetDanhSachLichChieuPhimByID,
} from "../../store/danhSachPhimDC/actions";
import { thongTinLichChieuService } from "../../serrvices";

import DanhSachHeThong from "../../components/DSHeThong/DanhSachHeThong";
export default function DatVeDetail() {


  const { id } = useParams();


  const dispatch = useDispatch();

  const maPhim = parseInt(id);
  useEffect(() => {
    console.log("phimId=", maPhim);
    dispatch(asyncGetDanhSachLichChieuPhimByID({ maPhim })).then((res) => {

    });
  }, [maPhim]);

  const thongTin = useSelector((state) => state.DC.thongTin);

  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);


  const tddd = useSelector((state) => state.DC.listHeThongRapChieu.cumRapChieu);

  //
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;
  const gioChieu = dayjs(
    new Date(thongTin.ngayKhoiChieu)
  ).format("hh:mm A");
  const ngayChieu = dayjs(
    new Date(thongTin.ngayKhoiChieu)
  ).format("DD/MM/YYYY");
  console.log("ngayChieu");
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 item">
              <div className="hinhAnh">
                <img src={thongTin.hinhAnh} width="300" height="500" />
              </div>
            </div>
            <div className="col-6">
              <div className="thongTinPhim">
                <h3 className="display-4">{thongTin.tenPhim}</h3>
                <p>Nội Dung: <span>{thongTin.moTa}</span></p>
                <p>Ngày Chiếu: <span>{ngayChieu}</span></p>
                <p>Giờ Chiếu: <span>{gioChieu}</span></p>

              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="danhSachHeThong">
            <h6 className="text-center display-4">Lịch Chiếu</h6>
            <DanhSachHeThong />

          </div>
        </div>
      </div>
    </>
  );
}
