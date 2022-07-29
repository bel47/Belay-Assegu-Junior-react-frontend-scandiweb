import styled from "styled-components";

export const ProductsListContainer = styled.div`
    padding: 5rem 0 10rem;
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
`;  

export const CategoryName = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 6rem;
    text-transform: capitalize;
`;