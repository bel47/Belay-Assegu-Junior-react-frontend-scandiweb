import styled from "styled-components";

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CartDropdownContainer = styled.div`
    display: inline-block;
    cursor:pointer;
    ${props => props.show && ` ${CartContent} {
            display: block
        }`
    }
`;

export const CartTitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 23px;
    color: #1D1F22;
    & span{
        font-weight: 500;
    }
`;

export const NavbarCartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px 0;
    align-items: center;
    max-height: 316px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const CartButtons = styled.div`
    width: 292px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-right: 16px;
    // margin-left: 16px;
    padding: 0px 32px;
    // Gap:12px

`;

// export const CartDropdownButton = styled(CustomButton)`
//    margin-top: auto;
// `;

export const CartContainer = styled.div`
    display: inline-block;
    cursor: pointer;
`;

export const CartItemCount = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20px;
    height: 20px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    top: -2px;
    right: -12px;
    background-color: #1D1F22;
    border-radius: 60px;
    z-index: 3;
`;

export const CartContent = styled.div`
    display: none;
    position: absolute;
    // width: 325px;
    top: 57px;
    background: #FFFFFF;
    padding: 32px, 16px; 
    margin-left: -270px;
    z-index: 1;
    border: 1px solid black;
    height: fit-content;
    max-height: 45rem;
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // align-items: center;
    padding: 16px 32px;
    width: 289px;
    height: 28px;
`;

export const SPAN = styled.span`
    font-weight: ${props => props.price ? "700" : "500"};
    font-size: 16px;
    line-height: ${props => props.price ? "160%" : "18px"};
    color: #1D1F22;
`;

export const CartItemsContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 293px;
    height: 190px;
`;

export const CartItemsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    // width: 293px;
    // height: 420px;  
`;

export const PriceLabel = styled.label`
    // width: 50px;
    // height: 26px;
    // font-family: 'Raleway';
    // font-style: normal;
    // font-weight: 500;
    // font-size: 16px;
    // line-height: 160%;
    // text-align: left;
    // color: #1D1F22;

    width: 52px;
    height: 26px;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
    color: #1D1F22;
`;

export const QuantityButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 32px;
    width: 24px;
    height: 190px;
`;

export const MiniCartImg = styled.div`
    width: 121px;
    height: 190px;
    background: url('${props => props.img}');
`;

export const PlusButton = styled.button`
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 1px solid #1D1F22;
    background:#FFFFFF;
    align-items: center;
`;

export const MinusButton = styled.button`
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 1px solid #1D1F22;
    background:#FFFFFF;
    align-items: center;
    img {
    }
`;

export const QtyLable = styled.label`
    width: 9px;
    height: 26px;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
    color: #1D1F22;
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 164px;
    height: 190px;
`;

export const RightContent = styled.div`
    // display: flex;
    // flex-direction: row;
    align-items: flex-end;
    padding-right: 0px;
    & img{
        width: 121px;
        height: 190px;
    }
    // background-image: url('${props => props.img}');
`;

export const Discription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 136px;
    height: 82px;
    & span {
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
        // display: flex;
        // align-items: center;
        color: #1D1F22;
    }
`;

export const MiniCartOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
    background-color: rgba(0, 0, 0, 0.35);
    // z-index: 10;
`;