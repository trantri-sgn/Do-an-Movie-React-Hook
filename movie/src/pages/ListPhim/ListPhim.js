import React from "react";
import Slider from "react-slick";

import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Col } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { StyleListPhim, StyleListPhimUL } from "./ListPhim.style";
import { ListPhimItems } from "../../components/ListPhimItems";
import { PATHS } from "../../constants";
export default function ListPhim() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 200,
    rows: 2,
    slidesPerRow: 1,
  };

  const listPhimDC = useSelector((state) => state.DC.listNewsItem);

  const DatVeDetail = PATHS.DatVeDetail;

  return (
    <div>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {listPhimDC &&
          listPhimDC.map((DC) => {
            return (
              <Col xs={6} key={DC.maPhim}>
                <div>
                  <Link to={`/datve/${DC.maPhim}`}>
                    <img
                      className="card-img-top"
                      src={DC.hinhAnh}
                      style={{ width: "110%", height: "350px" }}
                      alt={DC.biDanh}
                    />
                    <div className="card-body">
                      <button className="btn-play">
                        <i className="fas fa-arrow-right"></i>
                        <p>Play</p>
                      </button>
                      <h4 className="card-title">
                        {DC.tenPhim.length > 15
                          ? DC.moTa.substr(0, 15) + "..."
                          : DC.tenPhim}
                      </h4>
                      <button className="btn-detail">XEM CHI TIẾT</button>
                      <button className="btn-title">MUA VÉ</button>
                    </div>
                  </Link>
                </div>
              </Col>
            );
          })}
      </Slider>
    </div>
  );
}
