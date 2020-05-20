import React, { useState } from "react";
import { PATHS } from "../../constants";
import { Link } from "react-router-dom";
export default function ListPhimSC({ DC }) {
  const DatVeDetail = PATHS.DatVeDetail;

  return (
    <div className="container">
      <Link to={`DatVeDetail${DC.maPhim}`}>
        <div className="card col-3">
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
        </div>
      </Link>
    </div>
  );
}
