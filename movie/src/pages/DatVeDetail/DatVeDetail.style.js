import style from "styled-components";

import { Breadcrumb, Layout, Menu, Row, Col } from "antd";

export const StyleDatVeMain = style(Col)`
max-width: 870px;
    float: none;
    margin: auto;
    clear: both;
    padding-top: 40px;
    background: #fff; 
     min-height: 713px; 
     float: left; 
     border-top: 1px solid #ebebec; 
     border-bottom: 1px solid #ebebec; 
    border-left: 1px solid #ebebec; 
    border-top-left-radius: 4px; 
    border-bottom-left-radius: 4px;
`;
export const StyleDatVeUL = style.ul`
padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const StyleDatVeLi = style.li`
float: none;
background-color: #fff;
cursor: pointer;
position: relative;
    display: block;
`;

export const StyleDatVeLogo = style.div`
padding: 20px;
position: relative;
opacity: .5;
transition: all .2s;`;
