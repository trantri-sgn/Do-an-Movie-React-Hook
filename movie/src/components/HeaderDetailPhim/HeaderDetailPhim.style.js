import style from "styled-components";
import { Row, Col } from "antd";

export const StyleHeaderDetailRow = style(Row)`
max-width: 870px;
float: none;
margin: auto;
`;

export const StyleHeaderDetailLi = style.li`
position: relative;
display: block;
float: none;
    background-color: #fff;
    cursor: pointer;
`;

export const StyleHeaderDetailDivLi = style.div`
padding: 20px;
    position: relative;
    opacity: .5;
    transition: all .2s;
`;
export const StyleHeaderDetailDivImg = style.img`
width: 50px;
margin-right: 10px;
`;
export const StyleHeaderDetailDivLi2 = style.div`
font-size: 16px;
font-family: 'SF Medium';
color: #000;
position: absolute;
left: 85px;
right: 20px;
top: 50%;
transform: translateY(-50%);
`;
export const StyleHeaderDetailDivLi3 = style.div`
width: 100%;
float: left;
`;
