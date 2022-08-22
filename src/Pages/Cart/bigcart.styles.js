import styled from "styled-components";

export const BigCartContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    margin-top: 80px;
`;
export const BigCartContaint = styled.div`
    padding-top: 80px;
    padding-bottom: 3rem;
`;
export const BigCartHeader = styled.h3`
    font-size: 32px;
    line-height: 40px;
    color: #1D1F22;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 4rem;
`;

export const BigCartItems = styled.div`
    display: grid;
    column-gap: 0.75rem;
    padding: 1rem 0;
    grid-template-columns: 22fr 2fr 4fr;
    border-top: 2px solid #eee;
    height: fit-content;
`;

export const EmptyCart = styled.div`
    display: flex;
    position: relative;
    padding-top: 180px;
    justify-content: center;
    & p {
        font-weight: 400;
        font-size: 25px;
    }
`;


export const BigCartItemLeft = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 300;
`;

export const BigCartItemRight = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const BigCartItemBrand = styled.p`
    width: 292px;
    height: 27px;
    left: 101px;
    top: 280px;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #1D1F22;
`;

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 300;
    border-top: 2px solid #eee;
`;

export const Tax = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #1D1F22;
    gap: 3px;
    span{
        font-weight: 500;
    }
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 44px;
    height: 28px;
    p {
        TotalPricewidth: 60px;
        height: 28px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;       
        text-align: right;
        color: #1D1F22;
    }
`;

export const BigCartItemName = styled.p`
    width: 292px;
    height: 27px;
    left: 101px;
    top: 323px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #1D1F22;
`;

export const ItemPrice = styled.div`
    width: 79px;
    height: 24px;
    left: 100px;
    top: 370px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1D1F22;
`;

export const CarrouselContainer = styled.div`
    img {
        Width:200px;
        Height:288px;       
    }
`;

export const CaroselButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: absolute;
    width: 56px;
    height: 24px;
    right: 20px;
    bottom: 20.68px;
    cursor: pointer;
    div {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            position: absolute;
            width: 24px;
            height: 24px;
            background: rgba(0, 0, 0, 0.73);
        }
        
    }
`;

export const QuantityButton = styled.div`
    width: 45px;
    height: 288px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
    }

    img {
        cursor: pointer;
    }
`;