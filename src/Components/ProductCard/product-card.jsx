import React, { Component } from "react";
import {
  ProductCardBox,
  ImagePreview,
  Title,
  Link,
  Icon,
  Label,
  OutOfStock,
  ContentContainer,
  ProductCardBrand,
  ProductPrice,
} from "./product-card-styles";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product };
  }

  render() {
    const { product, prices } = this.props;
    // console.log(prices[0].currency.symbol)
    return (
      <ProductCardBox>
        <ImagePreview>
          <img src={product.gallery[0]} alt="Preview" />
          {!product.inStock && (
            <OutOfStock inStock>
              <p>Out of Stock</p>
            </OutOfStock>
          )}
        </ImagePreview>
        <ContentContainer>
          <ProductCardBrand inStock={!product.inStock}>
            {product.brand} {product.name}
          </ProductCardBrand>
          <ProductPrice inStock={!product.inStock}>
            {prices[0].currency.symbol}
            {prices
              .filter((price) => 
                (price) => price.currency.symbol === '$'
               )[0]
              .amount.toFixed(2)}
          </ProductPrice>
        </ContentContainer>
      </ProductCardBox>
    );
  }
}

export default ProductCard;
