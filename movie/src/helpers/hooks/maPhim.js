import { Selector } from "react-redux";

import React from "react";

export default function maPhim() {
  const maPhim = useSelector((state) => state.DC.listNewsItem.maPhim);
  console.log("maPhim", maPhim);

  return <div></div>;
}
