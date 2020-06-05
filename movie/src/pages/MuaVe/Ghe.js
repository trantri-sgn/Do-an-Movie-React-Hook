import React, { useState, useCallback } from "react";

import "./ghe.css";
export default function Ghe({ ghe, index, setGheDuocChon }) {
  //const { maGhe, stt, giaVe } = ghe;

  const [dangDat, setDangDat] = useState(false);

  const chonGhe = useCallback(() => {
    setDangDat(!dangDat);
    setGheDuocChon(gheChon);
  }, [dangDat, setGheDuocChon]);

  const gheChon = {
    maGhe: ghe.maGhe,
    giaVe: ghe.giaVe,
    stt: ghe.stt,
    dangDat: !dangDat,
  };

  //lay danh sach ghe
  function renderGhe() {
    let classTrangThaiGhe = "ghe ";
    let disabled = ghe.daDat ? true : false;
    let tenGhe = ghe.daDat ? "X" : ghe.stt;

    if (ghe.daDat) {
      classTrangThaiGhe += ghe.daDat ? "gheDaDat " : " ";
    } else {
      if (dangDat) {
        classTrangThaiGhe += "gheDangDat ";
      } else {
        classTrangThaiGhe += ghe.loaiGhe === "Thuong" ? "ghe " : "gheVip ";
      }
    }
    return (
      <>
        <button
          onClick={chonGhe}
          className={classTrangThaiGhe}
          disabled={disabled}
        >
          {tenGhe}
        </button>
        {index % 16 === 0 ? <br /> : ""}
      </>
    );
  }
  // chon ghe

  // const chonGhe = () => {
  //   //Sau khi setState thay đổi trang thái ghế sẽ đưa dữ liệu lên reducer xử lý
  //   setDangDat(!dangDat);

  // };

  return <>{renderGhe()}</>;
}
