import styled,{css} from 'styled-components';

export const ProductCardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    transition: all 0.3s ease;
    z-index: 1;
    cursor: pointer;
    background: #FFFFFF;

    &:hover{
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
      ${props => props.hover &&`${AddtoCartButton} {
            display: block;
          }`
        }
    }
`;

export const ImagePreview = styled.div`
    width: 100%;
    position: relative;
    padding-top: 100%;
    overflow-y: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const OutOfStock = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0%;
    background-color: rgba(255, 255, 255, 0.65);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    ${props => props.inStock &&
      css`
      p {
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #8D8F9A;
      }`
    }
`;

export const Title = styled.h1`
  /* Text centering won't break if props.upsidedown is falsy */
  ${props => props.upsidedown && 'transform: rotate(180deg);'}
  text-align: center;
`;


export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

export const ContentContainer = styled.div`
    width: 100%;
    text-align: left;
    position: relative;
`;

export const ProductCardBrand = styled.h3`
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    margin-bottom: 0;
    ${props => props.inStock &&
      css`
        color: #8D8F9A;
      `
    }
`;

export const ProductPrice = styled.h4`
    font-weight: 500;
    font-size: 18px;
    margin-top: 2px;
    ${props => props.inStock &&
      css`
        color: #8D8F9A;
      `
    }
`;

export const AddtoCartButton = styled.span`
    display:none;
    position: absolute;
    width: 52px;
    height: 52px;
    &:hover{
      drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
    }
    margin-top: 226px;
    margin-right: 30px;
    align-self: flex-end;
    z-index: 3;
`;