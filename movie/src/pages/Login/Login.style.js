import style from "styled-components";

export const StyleLayOut = style.div`
background-size: cover;
display: block;
height: 100%;
overflow: auto;
width: 100%;
`;

export const StyleBG = style.div`

position: fixed;

left: 0;
height: 100%;
top: 0;
width: 100%;
z-index: -1;
`;

export const StyleContentBox = style.div`
align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 560px;
    min-width: 560px;
`;

export const StyleContentBody = style.div`
align-items: stretch;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.15);
    display: flex;
    flex-direction: column;
    margin-top: 2.85714rem;
    padding: 6.42857rem 7.14286rem;
    width: 100%;
`;

export const StyleContentTitle = style.div`
align-items: baseline;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.85714rem;
    padding-left: 1.78571rem;
    width: 100%;
`;

export const StyleH = style.h1`
color: #4a505c;
    font-size: 1.8em;
    letter-spacing: .1px;
    margin: 0;
`;

export const StyleA = style.a`padding: 0 1.78571rem 0 0;
    color: #4a505c;
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
`;
