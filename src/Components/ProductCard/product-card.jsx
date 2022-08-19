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
  AddtoCartButton,
} from "./product-card-styles";
import CartContext from "../../context/cart-context";
import { Navigate } from "react-router-dom";
import addtocart from "../../Assets//addtocart.svg";


export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product, navigate: false };
  }

  addItemWithDefaultAttrs = (itemId, item) => {
    let selectedAttrs = {};
    for (let attr of item.attributes) {
      selectedAttrs = {
        ...selectedAttrs,
        [attr.id]: attr.items.at(0).value,
      };
    }

    this.context.addItem(itemId, item, selectedAttrs);
  };

  cardClickHandler = () => {
    this.setState({ ...this.state, navigate: true });
  };

  render() {
    const { product, prices } = this.props;
    if (this.state.navigate) {
      return <Navigate to={`/products/${product.id}`} />;
    }
    return (
      <ProductCardBox hover onClick={this.cardClickHandler}>
        <ImagePreview>
          <img src={product.gallery[0]} alt="Preview" />
          {!product.inStock && (
            <OutOfStock inStock>
              <p>Out of Stock</p>
            </OutOfStock>
          )}
        </ImagePreview>
        {product.inStock && (
          <AddtoCartButton
            onClick={() =>
              this.addItemWithDefaultAttrs(
                this.state.product.id,
                this.state.product
              )
            }
          >
            <img src={addtocart} />
          </AddtoCartButton>
        )}

        <ContentContainer>
          <ProductCardBrand inStock={!product.inStock}>
            {product.brand} {product.name}
          </ProductCardBrand>
          <ProductPrice inStock={!product.inStock}>
            {/* {prices[0].currency.symbol} */}
            {this.context.currency}
            {prices
              .filter(
                (price) => price.currency.symbol === `${this.context.currency}`
              )[0]
              .amount.toFixed(2)}
            {
              //  prices.map(price =>
              //       price.currency.symbol === this.context.currency &&
              //           <React.Fragment key={price.currency.symbol + price.amount}>
              //               {price.currency.symbol} {price.amount.toFixed(2)}
              //           </React.Fragment>
              //   )
            }
          </ProductPrice>
        </ContentContainer>
      </ProductCardBox>
    );
  }
}

ProductCard.contextType = CartContext;

export default ProductCard;