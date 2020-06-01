import React from "react";

import { Col, Input } from "antd";
import "./Header.css";
import { PATHS } from "../../constants";
import {
  StyleHeaderContent,
  StyleHeaderImg,
  StyleHeaderFromSearch,
  StyleHeaderInputGroup,
  StyleHeaderMember,
  StyleHeaderLogin,
  StyleHeaderRegister,
} from "./Header.style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { actLogOut } from "../../store/auth/actions";
import { useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
export default function Header() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const TTUser = useSelector((state) => state.User.TTUSER);
  console.log("TTUser", TTUser);

  function handleLogOut() {
    dispatch(actLogOut());
  }
  return (
    <StyleHeaderContent>
      <Col span={8}>
        <StyleHeaderImg>
          <Link to={PATHS.HOMEPAGE}>
            <img src="./img/logo.png" alt="" />
          </Link>
        </StyleHeaderImg>
      </Col>
      <Col span={8}>
        <StyleHeaderFromSearch>
          <StyleHeaderInputGroup>
            <Search
              placeholder="Tìm tên phim, diễn viên..."
              onSearch={(value) => console.log(value)}
              size="large"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                <i className="fa fa-search" />
              </span>
            </div>
          </StyleHeaderInputGroup>
        </StyleHeaderFromSearch>
      </Col>
      <Col span={8}>
        <StyleHeaderMember>
          {TTUser ? (
            <div className="wrapper-user">
              <Link className="user-header">
                <span>
                  <UserOutlined style={{ fontSize: "32px" }} />
                </span>
                <span style={{ fontSize: "32px" }}>{TTUser}</span>
              </Link>
              <div onClick={handleLogOut} className="logout">
                LogOut
              </div>
            </div>
          ) : (
            <>
              <StyleHeaderLogin to={PATHS.LOGIN}> Đăng Nhập</StyleHeaderLogin>
              <p>|</p>
              <StyleHeaderRegister to={PATHS.RESGISTER}>
                Đăng Ký
              </StyleHeaderRegister>
            </>
          )}
        </StyleHeaderMember>
      </Col>
    </StyleHeaderContent>
  );
}
