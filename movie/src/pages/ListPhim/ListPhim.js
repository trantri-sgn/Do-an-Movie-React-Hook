import React, { Component } from "react";
import Slider from "react-slick";

import { useSelector } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyleListPhim, StyleListPhimUL } from "./ListPhim.style";
import { ListPhimItems } from "../../components/ListPhimItems";
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
  console.log("listPhimDC", listPhimDC);

  return (
    <div>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {listPhimDC &&
          listPhimDC.map((DC) => {
            return <ListPhimItems key={DC.maPhim} DC={DC} />;
          })}
      </Slider>
    </div>
  );
}
