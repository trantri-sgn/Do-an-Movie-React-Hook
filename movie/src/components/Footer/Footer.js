import React from "react";
import { Row } from "antd";
import {
  StyleFooterAll,
  StyleFooterContainer,
  StyleFooterItems,
  StyleFooterH6,
  StyleFooterUL,
  StyleFooterA,
  StyleFooterULItem1,
  StyleFooterEnd,
  StyleFooterEndA,
} from "./Footer.style";
export default function Footer() {
  return (
    <StyleFooterAll>
      <StyleFooterContainer>
        <Row>
          <StyleFooterItems>
            <StyleFooterH6>GIỚI THIỆU</StyleFooterH6>
            <StyleFooterUL>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>VỀ CHÚNG TÔI
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>THOẢ THUẬN SỬ DỤNG
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>QUY CHẾ HOẠT ĐỘNG
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>CHÍNH SÁCH BẢO MẬT
                </StyleFooterA>
              </li>
            </StyleFooterUL>
          </StyleFooterItems>
          <StyleFooterItems>
            <StyleFooterH6>GÓC ĐIỆN ẢNH</StyleFooterH6>
            <StyleFooterUL>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>THỂ LOẠI PHIM
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>BÌNH LUẬN PHIM
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>BLOG ĐIỆN ẢNH
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>PHIM HAY THÁNG
                </StyleFooterA>
              </li>
            </StyleFooterUL>
          </StyleFooterItems>
          <StyleFooterItems>
            <StyleFooterH6>HỖ TRỢ</StyleFooterH6>
            <StyleFooterUL>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>GÓP Ý
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>SALE & SERVICES
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>RẠP / GIÁ VÉ
                </StyleFooterA>
              </li>
              <li>
                <StyleFooterA href="#">
                  <i className="fa fa-angle-double-right"></i>TUYỂN DỤNG
                </StyleFooterA>
              </li>
            </StyleFooterUL>
          </StyleFooterItems>
          <StyleFooterItems>
            <StyleFooterH6>KẾT NỐI MOVIE</StyleFooterH6>
            <StyleFooterULItem1>
              <StyleFooterA className="facebook">
                <i className="fab fa-facebook-square"></i>
              </StyleFooterA>
              <StyleFooterA className="youtube">
                <i className="fab fa-youtube"></i>
              </StyleFooterA>
              <StyleFooterA className="instagram">
                <i className="fab fa-instagram"></i>
              </StyleFooterA>
            </StyleFooterULItem1>

            <StyleFooterH6>DOWNLOAD APP</StyleFooterH6>
            <StyleFooterULItem1>
              <StyleFooterA className="apple-google">
                <i className="fab fa-apple"></i>
                <i className="fab fa-google-play"></i>
              </StyleFooterA>
            </StyleFooterULItem1>
          </StyleFooterItems>
        </Row>
      </StyleFooterContainer>
      <StyleFooterEnd>
        <p>
          2017 © Movie Star /{" "}
          <StyleFooterEndA href="#">Web design by Klever media</StyleFooterEndA>
        </p>
      </StyleFooterEnd>
    </StyleFooterAll>
  );
}
