import styled from "styled-components";

export const ProductsListContainer = styled.div`
    width: 1238px;
    position: relative;
    margin: 0 auto;
    padding-top: 80px;
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    padding-bottom:1rem;
`;  

export const CategoryName = styled.h1`
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    color: #1D1F22;
    text-transform: uppercase;
    margin-bottom: 103px;
    padding-top: 80px;

    left: calc(50% - 299px/2 - 469.5px);
    top: calc(50% - 68px/2 - 562.5px);
`;