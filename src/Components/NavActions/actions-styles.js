import styled from "styled-components";

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

export const CurrencyContainer = styled.div`
    cursor: pointer;
    height: 100%;
    user-select: none;
    position: relative;
    font-weight: 500;
    & img{
        margin-left: 3px;
    }
`;

export const Header = styled.div`
    display: flex;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
`;

export const Symbol = styled.div`

`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 0.5rem;
    padding: 0.5rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
`;