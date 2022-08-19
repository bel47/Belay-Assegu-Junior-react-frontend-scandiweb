import styled from "styled-components";

export const BigCartContainer = styled.div`
    position: relative;
    width: 1440px;
    // height: 1395px;
    padding-bottom: 80px;
    padding-top: 80px;
    margin: 0 auto;

`;

export const BigCartHeader = styled.h3`
    position: relative;
    width: 84px;
    height: 40px;
    margin-left: 100px;
    top: 80px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #1D1F22;
`;

export const HR = styled.div`
    position: absolute;
    width: 1240px;
    height: 1px;
    left: 100px;
    top: 255px;
    background: #E5E5E5;
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

export const BigCartItems = styled.div`
    position: relative;
    // top:17px;
    // width: 1100px;
    // outline: 1px solid;
    // margin-left: 101px;
    top: 120px;
    &:last-child {
        border-bottom: 1px solid #E5E5E5;
        // border-width: 1240px;
        // border-height: 1px;
    }
`;

export const BigCartItemLeft = styled.div`
    // position: relative;
    margin-left: 100px;
    // left: 101px;
    top: 280px;
    width: 1240px;
    width: 1240px;
    min-height: 225px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #E5E5E5;
`;

export const BigCartItemRight = styled.div`
    // position: absolute;
    // width: 292px;
    // height: 595px;
    // left: 929px;
    // top: 160px;

    margin-top: 20px;
    height: 100px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BigCartItemBrand = styled.p`
    // position: absolute;
    width: 292px;
    height: 27px;
    left: 101px;
    top: 280px;
    font-family: 'Raleway';
    font-style: normal;
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
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
    position: relative;
    width: 279px;
    height: 159px;
    left: 100px;
    top: 50px;
`;

export const Tax = styled.p`
    // width: 184px;
    // height: 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 184px;
    height: 64px;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #1D1F22;
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 44px;
    width: 198px;
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
    // position: absolute;
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
    // position: absolute;
    width: 79px;
    height: 24px;
    left: 100px;
    top: 370px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;

    color: #1D1F22;
`;

export const CarrouselContainer = styled.div`
    position: absolute;
    left: 79.17%;
    right: 6.94%;
    top: 8.07%;
    bottom:  8.07%;
    & img {
        Width:200px;
        Height:288px;
        // Left:1140px;
        
    }
`;

export const CaroselButton = styled.div`
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // z-index: 2;

    // display: flex;
    // justify-content: space-between;
    // align-items: center;

    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 8px;


position: absolute;
width: 56px;
height: 24px;
right:0;
// left: 1268px;
// top: 865px;
    div {
        width: 24px;
        height: 24px;
        
    
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            // width: 7px;
            // height: 13px;
            // transition: all .3s;
            // filter: drop-shadow(rgba(17, 17, 26, 0.05) 0px 1px 0px)


            position: absolute;
            width: 24px;
            height: 24px;
            // left: 0px;
            top: 0px;
            background: rgba(0, 0, 0, 0.73);
        }
        
    }
`;

export const QuantityButton = styled.div`
        position: absolute;
        width: 45px;
        height: 288px;
        left: 1071px;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            text-align: center;
        }

        button {
            width: 45px;
            height: 45px;
            padding: 0;
            border-radius: 0;
            background-color: #FFFFFF;
            border: 1px solid #1D1F22;
            
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 300;
            font-size: 40px;
        
            display: flex;
            align-items: center;
            justify-content: center;
        
            transition: transform .1s
        }
        
`;