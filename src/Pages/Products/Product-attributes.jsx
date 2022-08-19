import React, { Component } from "react";
import {
  PDPTitle,
  PDPSubtitle,
  Attributes,
  PDPPrice,
  ProductDescription,
} from "./product-list-styles";
import AttributeButtons from "./attribute-buttons";
import Button from "../../Components/Shared/Button";
import CartContext from "../../context/cart-context";
import { Interweave } from "interweave";
import Price from "../../Components/Shared/Price";

export class ProductAttributes extends Component {
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
  render() {
    const { product } = this.props;
    // console.log("PD", product);
    return (
      product && (
        <>
          <PDPTitle>{product.brand}</PDPTitle>
          <PDPTitle name>{product.name}</PDPTitle>
          {product.attributes.map((attr) => (
            <div key={attr.id}>
              <PDPSubtitle>{attr.id.toUpperCase()}:</PDPSubtitle>
              <Attributes>
                {attr.items.map((a) => (
                  <AttributeButtons
                    attr={a}
                    type={attr.type}
                    name={attr.name}
                    id={attr.id}
                    key={a.id + attr.id}
                    onClick={this.props.onClick}
                  />
                ))}
              </Attributes>
            </div>
          ))}
          <PDPSubtitle>PRICE:</PDPSubtitle>
          <PDPPrice>
            {/* {this.context.currency}
            {product.prices
              .filter(
                (price) => price.currency.symbol === `${this.context.currency}`
              )[0]
              .amount.toFixed(2)} */}
            <Price item={product} />
          </PDPPrice>
          <frameElement
            onClick={() => this.addItemWithDefaultAttrs(product.id, product)}
          >
            {product.inStock && (
              <Button primary large>
                ADD TO CART
              </Button>
            )}
          </frameElement>

          <ProductDescription>
            <Interweave content={product.description} />
          </ProductDescription>
        </>
      )
    );
  }
}

ProductAttributes.contextType = CartContext;
export default ProductAttributes;
