import styled from "styled-components";

export const NavbarLogo =styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
    margin: auto;
    height: 32px;
`;

export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 100;
`;

export const NavbarActionContainer  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;