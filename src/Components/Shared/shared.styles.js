import styled, { css, keyframes } from "styled-components";

export const Buttons = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    height: 43px;
    background: ${props => props.primary ? "#5ECE7B;" : "#FFFFFF"};
    color: ${props => props.primary ? "#FFFFFF" : "#1D1F22"};
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    border: 1px solid ${props => props.primary ? "" : "#1D1F22"};
    margin-top: 3rem;
    margin-bottom: 2rem;
    ${props => props.large &&
      css`
          width: 292px;
          height: 52px;
          padding: 16px 32px;
        `
    }
    &:disabled {
          background:  #fff;
          color: #ccc;
          cursor: no-drop;
    }
    cursor: pointer;
  `;

export const AttrTitle = styled.h3`
    font-family: ${props => props.type === 'mini' ? "Raleway" : "Roboto Condensed"};;
    font-style: normal;
    font-weight: ${props => props.type === 'mini' ? "400" : "700"};
    font-size: ${props => props.type === 'mini' ? "14px" : "18px"};
    line-height:  ${props => props.type === 'mini' ? "16px" : "18px"};
    display: flex;
    align-items: center;
    text-align: center;
    color: #1D1F22;
`;

export const SwatchButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    div {
        width: ${props => props.type === 'mini' ? "16px" : "32px"};
        height: ${props => props.type === 'mini' ? "16px" : "32px"};
        left: 52px;
        cursor: pointer;
    }
`;

export const AttributeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  gap: 8px;
  width: 120px;
  label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-width: ${props => props.type === 'mini' ? "24px" : "63px"};
      height:${props => props.type === 'mini' ? "24px" : "45px"};
      border-radius: 0;
      text-align: center;
      border: 1px solid #1D1F22;
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      transition: transform .1s;
      cursor: pointer;
  }
`;