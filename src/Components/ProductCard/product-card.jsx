import React, { Component } from "react";
import {
  ProductCardBox,
  ImagePreview,
  OutOfStock,
  ContentContainer,
  ProductCardBrand,
  ProductPrice,
  AddtoCartButton,
} from "./product-card-styles";
import CartContext from "../../context/cart-context";
import { Navigate } from "react-router-dom";
import addtocart from "../../Assets//addtocart.svg";
import Price from "../Shared/Price";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { navigate: false };
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

    this.context.setNotification(
      true,
      this.props.product.brand + " " + this.props.product.name,
    );
  };

  cardClickHandler = () => {
    this.setState({ navigate: true });
  };

  render() {
    const { product, prices } = this.props;
    if (this.state.navigate) {
      return <Navigate to={`/products/${product.id}`} />;
    }
    return (
      <ProductCardBox hover>
        <ImagePreview onClick={this.cardClickHandler}>
          <img src={product.gallery[0]} alt="Preview" />
          {!product.inStock && (
            <OutOfStock inStock>
              <p>Out of Stock</p>
            </OutOfStock>
          )}
        </ImagePreview>
        {product.inStock && (
          <AddtoCartButton
            onClick={() => this.addItemWithDefaultAttrs(product.id, product)}
          >
            <img src={addtocart} />
          </AddtoCartButton>
        )}
        <ContentContainer>
          <ProductCardBrand inStock={!product.inStock}>
            {product.brand} {product.name}
          </ProductCardBrand>
          <ProductPrice inStock={!product.inStock}>
            <Price item={product} />
          </ProductPrice>
        </ContentContainer>
      </ProductCardBox>
    );
  }
}

ProductCard.contextType = CartContext;

export default ProductCard;
