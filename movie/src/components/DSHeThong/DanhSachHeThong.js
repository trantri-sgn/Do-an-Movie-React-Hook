import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Row, Col, Nav, Button, Container } from "react-bootstrap";
import { get } from "lodash";
import { StyleHeaderDetailRow } from "./DanhSach.style";
import { asyncGetLogo } from "../../store/danhSachPhimDC/actions";
import { render } from "react-dom";
import dayjs from "dayjs";
export default function DanhSachHeThong() {
  const thongTin = useSelector((state) => state.DC.thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("thongTin", thongTin);
  console.log("maHeThongcgv", get(maHeThong[0], "tenHeThongRap"));
  console.log("maHeThongcgddv", get(maHeThong[1], "tenHeThongRap"));
  const ma = get(maHeThong[0], "maHeThongRap");
  const logo = get(maHeThong[0], "logo");
  const logo1 = get(maHeThong[1], "logo");
  let mangmoi = maHeThong.map((e, index) => {
    return e.cumRapChieu;
    let aas = mangmoi.map((e, index) => {
      return e.maCumRap;
    });
    console.log("aas", aas);
  });
  console.log("mangmoi", mangmoi);

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {maHeThong.map((re) => {
                return (
                  <Nav.Item>
                    <Nav.Link key={re.maHeThongRap} eventKey={re.maHeThongRap}>
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
                          <div>
                            <h1>{cum.tenCumRap}</h1>
                          </div>
                          <div>
                            <Container>
                              <Row>
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
                                      <Col xs lg="2" key={ngayChieu}>
                                        <div>
                                          <h6>{ngayChieu}</h6>
                                        </div>
                                        <div>
                                          <Button variant="outline-primary">
                                            {gioChieu}
                                          </Button>
                                        </div>
                                      </Col>
                                    </>
                                  );
                                })}
                              </Row>
                            </Container>
                          </div>
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
