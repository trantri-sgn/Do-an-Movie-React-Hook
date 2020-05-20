import React from "react";

import { Col, Input } from "antd";

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
export default function Header() {
  const { Search } = Input;
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
          <StyleHeaderLogin to={PATHS.LOGIN}> Đăng Nhập</StyleHeaderLogin>
          <p>|</p>
          <StyleHeaderRegister to={PATHS.RESGISTER}>
            Đăng Ký
          </StyleHeaderRegister>
        </StyleHeaderMember>
      </Col>
    </StyleHeaderContent>
  );
}
