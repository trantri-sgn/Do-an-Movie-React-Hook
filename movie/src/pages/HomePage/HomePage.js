import React, { useEffect } from "react";
import ListPhim from "../ListPhim";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetDanhSachDC } from "../../store/danhSachPhimDC/actions";
export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetDanhSachDC());
  }, [dispatch]);

  const maPhim = useSelector((state) => state.DC.listNewsItem);
  console.log("maPhim", maPhim.maPhim);
  return <ListPhim />;
}
