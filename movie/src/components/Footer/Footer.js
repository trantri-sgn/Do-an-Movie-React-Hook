import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__all">
        <div className="container">
          <div className="row">
            <div className="footer__items">
              <h6>GIỚI THIỆU</h6>
              <ul className="icon-item">
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>VỀ CHÚNG TÔI
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>THOẢ THUẬN SỬ
                    DỤNG
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>QUY CHẾ HOẠT
                    ĐỘNG
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>CHÍNH SÁCH BẢO
                    MẬT
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h6>GÓC ĐIỆN ẢNH</h6>
              <ul className="icon-item">
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>THỂ LOẠI PHIM
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>BÌNH LUẬN PHIM
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>BLOG ĐIỆN ẢNH
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>PHIM HAY THÁNG
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h6>HỖ TRỢ</h6>
              <ul className="icon-item">
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>GÓP Ý
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>SALE & SERVICES
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>RẠP / GIÁ VÉ
                  </a>
                </li>
                <li>
                  <a href="@">
                    <i className="fa fa-angle-double-right"></i>TUYỂN DỤNG
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h6>KẾT NỐI MOVIE</h6>
              <ul className="item-one">
                <a className="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </ul>

              <h6>DOWNLOAD APP</h6>
              <ul className="item-two">
                <a className="apple-google">
                  <i className="fab fa-apple"></i>
                  <i className="fab fa-google-play"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <p>
            2017 © Movie Star / <a href="@">Web design by Klever media</a>
          </p>
        </div>
      </div>
    );
  }
}
