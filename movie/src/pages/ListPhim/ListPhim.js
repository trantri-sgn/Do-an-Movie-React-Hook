import React from "react";
import Slider from "react-slick";

import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Col } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function ListPhim() {
  const settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const listPhimDC = useSelector((state) => state.DC.listNewsItem);

  return (
    <div className="container">
      <h2 className="text-center">Danh Sách Phim</h2>
      <Slider {...settings}>
        {listPhimDC &&
          listPhimDC.map((DC) => {
            return (
              <Col xs={6} key={DC.maPhim}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={DC.hinhAnh}
                    style={{ width: "250px", height: "400px", padding: "0" }}
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
                    <Link to={`/datve/${DC.maPhim}`} className="btn-title">
                      XEM CHI TIẾT
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
      </Slider>
    </div>
  );
}
