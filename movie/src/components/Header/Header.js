import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { Col } from "antd";
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
import { useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const TTUser = useSelector((state) => state.User.TTUSER);
  // console.log("TTUser", TTUser);
  const [querySearch, setQuerySearch] = useState("");

  //ham search
  const handleOnchange = (e) => {
    setQuerySearch(e.target.value);
  };
  //xl o form
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // console.log("qwerySearch", querySearch);
    history.push(`${PATHS.SearchPhim}?q=${querySearch}`);
  };

  function handleLogOut() {
    dispatch(actLogOut());
  }
  return (
    <div>
      <StyleHeaderContent>
        <Col span={8}>
          <StyleHeaderImg>
            <Link to={PATHS.HOMEPAGE}>
              <img src="./img/logo.png" alt="" />
            </Link>
          </StyleHeaderImg>
        </Col>
        <Col span={8}>
          <StyleHeaderFromSearch onSubmit={handleSubmitSearch}>
            <StyleHeaderInputGroup>
              <FormControl
                value={querySearch}
                onChange={handleOnchange}
                placeholder="Tìm tên phim..."
                aria-label="Tìm tên phim..."
                aria-describedby="basic-addon2"
              />
            </StyleHeaderInputGroup>
          </StyleHeaderFromSearch>
        </Col>
        <Col span={8}>
          <StyleHeaderMember>
            {TTUser ? (
              <div className="wrapper-user">
                <Link to={PATHS} className="user-header">
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
              <div className="Member">
                <StyleHeaderLogin to={PATHS.LOGIN} className="login">
                  {" "}
                  Đăng Nhập
                </StyleHeaderLogin>
                <p>|</p>
                <StyleHeaderRegister to={PATHS.RESGISTER} className="register">
                  Đăng Ký
                </StyleHeaderRegister>
              </div>
            )}
          </StyleHeaderMember>
        </Col>
      </StyleHeaderContent>
      <div className="menu">
        <nav className="navbar navbar-expand-lg ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to={PATHS.HOMEPAGE} className="nav-link">
                  TRANG CHỦ
                </Link>
              </li>
              <li className="nav-item  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="@"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>|</span> PHIM
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="@">
                    PHIM ĐANG CHIẾU
                  </a>
                  <a className="dropdown-item" href="@">
                    PHIM SẮP CHIẾU
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="@"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>|</span> GÓC ĐIỆN ẢNH
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="@">
                    THỂ LOẠI PHIM
                  </a>
                  <a className="dropdown-item" href="@">
                    DIỄN VIÊN
                  </a>
                  <a className="dropdown-item" href="@">
                    ĐẠO DIỄN
                  </a>
                  <a className="dropdown-item" href="@">
                    BÌNH LUẬN PHIM
                  </a>
                  <a className="dropdown-item" href="@">
                    GÓC ĐIỆN ẢNH
                  </a>
                </div>
              </li>
              <li className="nav-item  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="@"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>|</span> SỰ KIỆN
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="@">
                    ƯU ĐÃI
                  </a>
                  <a className="dropdown-item" href="@">
                    PHIM HAY THÁNG
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="@">
                  {" "}
                  <span>|</span>RẠP/GIÁ VÉ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="@">
                  {" "}
                  <span>|</span>HỖ TRỢ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="@">
                  {" "}
                  <span>|</span>THÀNH VIÊN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
