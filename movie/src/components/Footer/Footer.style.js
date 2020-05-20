import style from "styled-components";

export const StyleFooterAll = style.div`
margin-top: 70px;
background: #101010;
color: #fff;
height: 400px;`;

export const StyleFooterContainer = style.div`
width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
`;

export const StyleFooterItems = style.div`
    padding-right: 95px;
      margin-right: 20px;
`;

export const StyleFooterH6 = style.h6`
font-size: 20px;
        letter-spacing: 1.5px;
        color: #f26b38;
        padding-bottom: 20px;
`;

export const StyleFooterUL = style.ul`
list-style: none;
`;

export const StyleFooterA = style.a`
font-size: 11px;
letter-spacing: 1.5px;
color: #686f7a;
text-decoration: none;
line-height: 30px;
cursor: pointer;
&:hover {
  color: #f26b38;
  transition: all 0.5s;
`;

export const StyleFooterULItem1 = style.ul`
font-size: 30px;
        color: #686f7a;
`;

export const StyleFooterEnd = style.div`
margin-top: 30px;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #686f7a;
  letter-spacing: 1px;
  color: #686f7a;
`;

export const StyleFooterEndA = style.a`
color: #686f7a;
text-decoration: none;
&:hover {
  color: #f26b38;
  transition: all 0.5s;
}
`;
