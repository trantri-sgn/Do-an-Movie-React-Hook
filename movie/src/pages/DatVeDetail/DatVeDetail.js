import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { get } from "lodash";
import { Breadcrumb, Layout, Menu } from "antd";
import { Tab, Row, Col, Nav } from "react-bootstrap";
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

//
import {
  StyleDatVeMain,
  StyleDatVeUL,
  StyleDatVeLi,
  StyleDatVeLogo,
} from "./DatVeDetail.style";
import { HeaderDetailPhim } from "../../components/HeaderDetailPhim";
import DanhSachHeThong from "../../components/DSHeThong/DanhSachHeThong";
export default function DatVeDetail() {
  // const listPhimDC = useSelector((state) => state.DC.listNewsItem.maPhim);

  // function findPhimByIdMaPhim(maPhim) {
  //   let findData = listPhimDC.find((phim) => {
  //     return phim.maPhim === parseInt(maPhim);
  //   });

  //   //

  //   return findData;
  // }
  // // const phim = phimnene();
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // // const phim = findPhimByIdMaPhim(id);

  // //
  // useEffect(() => {
  //   console.log("phimId = ");

  //   // dispatch(asyncGetDanhSachLichChieuPhimByID({ id })).then((res) => {
  //   //   console.log("res", res);
  //   //s });
  // }, []);

  // // if (!phim) {
  // //   alert("phim k cos");
  // return (
  //   <div style={{ padding: "20px" }}>
  //     <Breadcrumb>
  //       <Breadcrumb.Item>
  //         <Link to={PATHS.HOMEPAGE}>
  //           <HomeOutlined />
  //         </Link>
  //       </Breadcrumb.Item>

  //       <Breadcrumb.Item>Detail</Breadcrumb.Item>
  //     </Breadcrumb>
  //   </div>
  // );

  const { id } = useParams();
  console.log("ddd", useParams);

  const dispatch = useDispatch();
  console.log("id", id);
  const maPhim = parseInt(id);
  useEffect(() => {
    console.log("phimId=", maPhim);
    dispatch(asyncGetDanhSachLichChieuPhimByID({ maPhim })).then((res) => {
      console.log("res", res);
    });
  }, [maPhim]);
  useEffect(() => {
    console.log("phimId=", maPhim);
    dispatch(asyncGetLogo({})).then((res) => {
      console.log("res", res);
    });
  }, []);

  const thongTin = useSelector((state) => state.DC.thongTin);
  console.log("thongTin", thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("maHeThong 1111", maHeThong);

  console.log("maHeThong", get(maHeThong[0], "cumRapChieu[0]"));
  const tddd = useSelector((state) => state.DC.listHeThongRapChieu.cumRapChieu);
  console.log("tddd", tddd);
  //
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="hinhAnh">
                <img src={thongTin.hinhAnh} width="200" height="300" />
              </div>
            </div>
            <div className="col-8">
              <div className="thongTinPhim">
                <p className="text-success">{thongTin.tenPhim}</p>
                <p>{thongTin.moTa}</p>
              </div>
            </div>
          </div>
          <DanhSachHeThong />
        </div>
      </div>
    </>
  );
}
