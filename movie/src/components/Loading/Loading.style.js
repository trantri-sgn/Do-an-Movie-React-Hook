import styled from "styled-components";

export const StyleContainer = styled.div`
  z-index: 1000;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transiton: all 0.3 ease;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  ${(props) => {
    if (props.isLoading) {
      return `
  opacity : 1 ;
  visibility: visible ;
  `;
    } else {
      return `
      opacity: 0 ;
      visibility: hidden;
      `;
    }
  }};
`;
export const StyleSGV = styled.svg`
  width: 150px;
  height: 150px;
  margin: auto;
  display: block;
`;
