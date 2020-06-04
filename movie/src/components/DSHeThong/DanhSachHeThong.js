import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Row, Col, Nav, Button, Container } from "react-bootstrap";
import { get } from "lodash";
import { StyleHeaderDetailRow } from "./DanhSach.style";
import { asyncGetLogo } from "../../store/danhSachPhimDC/actions";
import { render } from "react-dom";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
export default function DanhSachHeThong() {
  const thongTin = useSelector((state) => state.DC.thongTin);
  const maHeThong = useSelector((state) => state.DC.listHeThongRapChieu);
  console.log("thongTin", thongTin);
  console.log("maHeThongcgv", get(maHeThong[0], "tenHeThongRap"));
  console.log("maHeThongcgddv", get(maHeThong[1], "tenHeThongRap"));

  let mangmoi = maHeThong.map((e, index) => {
    return e.cumRapChieu;
    let aas = mangmoi.map((e, index) => {
      return e.maCumRap;
    });

  });




  return (
    <div className="content">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="theaters">
            <Nav variant="pills" className="flex-column">
              {maHeThong.map((re) => {
                return (
                  <Nav.Item>
                    <Nav.Link key={re.maHeThongRap} eventKey={re.maHeThongRap}>
                      {re.tenHeThongRap}
                    </Nav.Link>
                    <hr />
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9} className="showtimes">
            <Tab.Content>
              {maHeThong.map((re) => {
                return (
                  <Tab.Pane key={re.maHeThongRap} eventKey={re.maHeThongRap}>
                    {re.cumRapChieu.map((cum) => {
                      return (
                        <div className="showtimes-content">
                          <div key={cum.maCumRap}>
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


                                  return (
                                    <div className="showtimes-item ">
                                      <Col xs lg="2" key={lich.maLichChieu}>
                                        <div className="date" key={lich.maLichChieu}>
                                         <h6>{ngayChieu}</h6>
                                        </div>
                                        <div>
                                          <Link
                                            to={`/muave/${lich.maLichChieu}`}
                                          >
                                            <Button className="time" variant="outline-primary">
                                              {gioChieu}
                                            </Button>
                                          </Link>
                                        </div>
                                      </Col>
                                    </div>
                                  );
                                })}
                              </Row>
                            </Container>
                          </div>
                          <div></div>
                        </div>
                      );
                    })}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div >
  );
}
