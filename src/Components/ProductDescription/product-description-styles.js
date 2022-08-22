import styled, { css } from "styled-components";

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
    cursor: pointer;
    & span {
        width: 63px;
        height: 45px;
        display: inline-block;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &:active {
            background-color: #F7F7F7;
            transform: scale(.96);
            color: #292929;
        }
    }
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
    bottom: 178px;
    &::-webkit-scrollbar {
        display: none;
    }
`;