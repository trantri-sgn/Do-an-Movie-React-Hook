import React from "react";
import { useDispatch } from "react-redux";
import { asynThongTinTaiKhoan } from "../../store/user/actions";
import { useSelector } from "react-redux";
export default function ThongTinTaiKhoan() {
  const dispatch = useDispatch();
  const taiKhoan = useSelector((state) => state.User.TTUSER);
  dispatch(asynThongTinTaiKhoan({ taiKhoan })).then((res) => {
    console.log("taiKhoan", res);
  });
  return (
    <div>
      <h1>ThongTinTaiKhoan</h1>
    </div>
  );
}
