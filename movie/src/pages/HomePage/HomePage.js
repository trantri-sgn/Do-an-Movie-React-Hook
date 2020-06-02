import React, { useEffect } from "react";
import ListPhim from "../ListPhim";

import { useDispatch } from "react-redux";
import { asyncGetDanhSachDC } from "../../store/danhSachPhimDC/actions";
export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetDanhSachDC());
  }, [dispatch]);

  return <ListPhim />;
}
