import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    transition: all 0.3s ease;
    z-index: 1;
    cursor: pointer;
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




















// .ProductCard {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     transition: all 0.3s ease;
//     z-index: 1;
//     cursor: pointer;
//   }
  
  // .ProductCard.mobile,
  // .ProductCard:hover {
  //   box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  // }
  


  
//   .previewImage img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 1;
//   }
  
//   .previewImage .outOfStockOverlay {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0%;
//     background-color: rgba(255, 255, 255, 0.65);
//     z-index: 5;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     user-select: none;
//   }
  
//   .previewImage .outOfStockOverlay p {
//     font-size: 1.6rem;
//     text-transform: uppercase;
//     color: var(--c-out-stock);
//   }
  
//   .cartIcon {
//     z-index: 10;
//     width: 2.8rem;
//     height: 2.8rem;
//     position: absolute;
//     top: -1.4rem;
//     right: 5%;
//     background-color: var(--c-primary);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     font-size: 1.2rem;
//     color: var(--c-white);
//     opacity: 0;
//     pointer-events: none;
//     cursor: pointer;
//   }
  
//   .cartIcon:hover {
//     transform: translateY(-3px);
//   }
  
//   .outOfStock .cartIcon {
//     background-color: #888;
//   }
  
//   .text {
//     width: 100%;
//     text-align: left;
//     padding-top: 2rem;
//     position: relative;
//   }
  
//   .outOfStock .brand,
//   .outOfStock .name,
//   .outOfStock .price {
//     color: var(--c-out-stock);
//   }
  
//   .brand {
//     font-size: 1rem;
//     color: #555;
//   }
  
//   .name {
//     font-size: 1.2rem;
//     font-weight: 400;
//     color: var(--c-text);
//     margin-bottom: 0.5rem;
//   }
  
//   .price {
//     color: var(--c-text);
//     font-size: 1.2rem;
//     font-weight: 500;
//   }
  