import styled, {css, keyframes } from "styled-components";

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
    cursor: pointer;
  `;