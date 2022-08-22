import styled, { css } from "styled-components";

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


export const PDPContainerLeft = styled.div`
    position: absolute;
    width: 1002px;
    height: 595px;
    left: calc(50% - 299px/2 - 469.5px);
    top: 160px;
`;
export const PDPContainerRight = styled.div`
    position: absolute;
    width: 292px;
    height: 595px;
    left: 929px;
    top: 160px;
`;

export const PDPTumbnailContainer = styled.div`
    width: 635px;
    height: 515px;
    display: flex;
`;

export const Thumbnail = styled.div`
      width:100px;
      height: 515px;
      display: block;
      overflow: scroll;
      padding: 2px;

      &::-webkit-scrollbar {
        display: none;
      }
      & img {
            width: 79px;
            height: 80px;
        }
`;

export const SliderImage = styled.div`
    height: 80px;
    width: 80px;
    margin-bottom: 40px;
    position: relative;
    // background: #C4C4C4;
    cursor: pointer;
`;

export const CurrentImageContainer = styled.div`
    width: 610px;
    height: 511px;
    margin-left: 40px;
    position: relative;
    & img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: #C4C4C4;
    }
`;

export const PDPTitle = styled.p`
    position: absolute;
    height: 27px;
    font-weight: ${props => props.name ? '400' : '600'};
    font-size: 30px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #1D1F22 ;
    margin:0;
    ${props => props.name &&
        css`
        margin-top: 43px;
        `
    }
`;

export const PDPSubtitle = styled.p`
    position: relative;
    margin-top: 110px;

    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;
    color: #1D1F22;

`;

export const Attributes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 5px;
    // margin-top: 12px;
    margin-bottom: 40px;
`;

export const SwatchButton = styled.label`
    box-sizing: border-box;
    width: 63px;
    height: 45px;
   /* border: ${props => props.white ? '1px solid #D3D2D5' : ''};*/
   cursor: pointer;
`;

export const AttributeButton = styled.label`
    box-sizing: border-box;
    border: 1px solid #1D1F22;
    padding: 10px 23px;
    position: relative;
    color: #292929; 
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    touch-action: manipulation;
    letter-spacing: 0.05em;
    cursor: pointer;
`;

export const PDPPrice = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin-top: 22px;
    display: flex;
    align-items: center;
    color: #1D1F22;
`;

export const ProductDescription = styled.div`
    min-height: 140px;
    max-height: 300px;
    overflow: scroll;
    margin-top: 40px;
    color: #1D1F22;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;

    // position: absolute;
    // width: 292px;
    // height: 103px;
    // left: calc(50% - 292px/2 + 355px);
    bottom: 178px;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;