import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetDanhSachGhe } from "../../store/danhSachPhimDC/actions";
export default function Muave() {
  const maLichChieu = useParams();
  const dispatch = useDispatch();

  console.log("maLichChieu", maLichChieu);

  useEffect(() => {
    console.log("phimId=", maLichChieu);
    // let objectDV = {ma}
    dispatch(asyncGetDanhSachGhe({ maLichChieu })).then((res) => {
      console.log("res", res);
    });
  }, [maLichChieu]);
  return (
    <div>
      <h1>Mua ve</h1>
    </div>
  );
}
