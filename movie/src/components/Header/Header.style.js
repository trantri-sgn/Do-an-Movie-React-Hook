import style from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "antd";
export const StyleHeaderContent = style(Row)`
margin-right: -15px;
margin-left: -15px;
background-color: #f7f9fa;
height: 80px;
`;

export const StyleHeaderImg = style.div`
text-align: center;
  margin-top: 10px;
`;

export const StyleHeaderFromSearch = style.form`
text-align: center;
width: 400px;
height: 2px;
margin: 20px;
`;

export const StyleHeaderInputGroup = style.div`
    background-color: #fff;
    transition: all 1s;`;

export const StyleHeaderMember = style(Row)`
font-size: 15px;
justify-content: center;
margin: 30px;
transition: all 1s;
color: #a0a3a7;
`;

export const StyleHeaderLogin = style(Link)`
margin-right: 5px;
color: #a0a3a7;
text-decoration: none;
cursor: pointer;
`;
export const StyleHeaderRegister = style(Link)`
color: #a0a3a7;
margin-left: 5px;
text-decoration: none;
cursor: pointer;
`;
