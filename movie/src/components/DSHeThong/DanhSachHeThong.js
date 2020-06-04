import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Row, Col, Nav, Button, Container } from "react-bootstrap";
import { get } from "lodash";
import { StyleHeaderDetailRow } from "./DanhSach.style";
import { asyncGetLogo } from "../../store/danhSachPhimDC/actions";
import { render } from "react-dom";
import { useParams, Link, useHistory } from "react-router-dom";
import dayjs from "dayjs";

export default function DanhSachHeThong() {
  const thongTin = useSelector((state) => state.DC.thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("thongTin", thongTin);
  console.log("maHeThongcgv", get(maHeThong[0], "tenHeThongRap"));
  console.log("maHeThongcgddv", get(maHeThong[1], "tenHeThongRap"));

  const history = useHistory();
  let mangmoi = maHeThong.map((e, index) => {
    return e.cumRapChieu;
    let aas = mangmoi.map((e, index) => {
      return e.maCumRap;
    });
    console.log("aas", aas);
  });
  console.log("mangmoi", mangmoi);
  const hashTable = {};
  console.log("fdfd", hashTable);

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {maHeThong.map((re) => {
                return (
                  <Nav.Item key={re.maHeThongRap}>
                    <Nav.Link eventKey={re.maHeThongRap}>
                      {re.tenHeThongRap}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {maHeThong.map((re) => {
                return (
                  <Tab.Pane key={re.maHeThongRap} eventKey={re.maHeThongRap}>
                    {re.cumRapChieu.map((cum) => {
                      return (
                        <>
                          <div key={cum.maCumRap}>
                            <h1>{cum.tenCumRap}</h1>
                          </div>
                          <div>
                            <Container>
                              <Row>
                                {/* {(cum.lichChieuPhim.map((lich) => {
                                  const { ngayChieuGioChieu, ...rest } = lich;

                                  const gioChieu = dayjs(
                                    new Date(ngayChieuGioChieu)
                                  ).format("hh:mm A");
                                  const ngayChieu = dayjs(
                                    new Date(ngayChieuGioChieu)
                                  ).format("DD/MM/YYYY");
                                  if (hashTable[ngayChieu]) {
                                    hashTable[ngayChieu] = [
                                      ...hashTable[ngayChieu],
                                      { ...rest, gioChieu },
                                    ];
                                  } else {
                                    hashTable[ngayChieu] = [
                                      { ...rest, gioChieu },
                                    ];
                                  }
                                }) &&
                                  console.log("hashtable", hashTable)) ||
                                  []} */}
                                {cum.lichChieuPhim.map((lich) => {
                                  const gioChieu = dayjs(
                                    new Date(lich.ngayChieuGioChieu)
                                  ).format("hh:mm A");
                                  const ngayChieu = dayjs(
                                    new Date(lich.ngayChieuGioChieu)
                                  ).format("DD/MM/YYYY");
                                  console.log("ngayChieu");

                                  return (
                                    <>
                                      <Col xs lg="2" key={lich.maLichChieu}>
                                        <div key={lich.maLichChieu}>
                                          <h6>{ngayChieu}</h6>
                                        </div>
                                        <div>
                                          <Link
                                            to={`/muave/${lich.maLichChieu}`}
                                          >
                                            <Button variant="outline-primary">
                                              {gioChieu}
                                            </Button>
                                          </Link>
                                        </div>
                                      </Col>
                                    </>
                                  );
                                })}
                              </Row>
                            </Container>
                          </div>
                          <div></div>
                        </>
                      );
                    })}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
