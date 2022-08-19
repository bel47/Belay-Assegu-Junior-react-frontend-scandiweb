import styled, { keyframes } from "styled-components";
import CustomButton from './custom-button.styles';

export const NavbarActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 22px;
    position: absolute;
    width: 204px;
    height: 40px;
    right: 101px;
    top: 23px;
`;

export const Header = styled.div`
    display: flex;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.3s ease;
`;

export const Lable = styled.label`
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
`;

export const CurrencyContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    height: 45px;
      &:hover {
        background: #EEEEEE;
    }
`;

const CDD = keyframes`
    0% {
        height: 0px;
    }
    100% {
        height: 264px;
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    width: 114px;
    min-height: 169px;
    top: 42px;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    margin-left: -24px;
  // animation: ${CDD} .4s;
    z-index: 1;
`;

export const CurrencyDropDown = styled.div`
    display: inline-block;
    cursor:pointer;
    ${props => props.show && ` ${DropDownContent} {
                display: block
        }`
  }
`;

