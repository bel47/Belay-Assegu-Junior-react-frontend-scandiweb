import React, { Component, Fragment } from "react";
import {
  PDPTitle,
  PDPSubtitle,
  Attributes,
  PDPPrice,
  ProductDescription,
} from "./product-description-styles";
import AttributeButtons from "./attribute-buttons";
import Button from "../Shared/Button";
import CartContext from "../../context/cart-context";
import { Interweave } from "interweave";
import Price from "../Shared/Price";

export class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttrs: {},
      disabled: true,
    };
  }
  setAttributes = (id, attr) => {
    if (this.state.selectedAttrs[id] !== attr) {
      this.setState({
        selectedAttrs: {
          ...this.state.selectedAttrs,
          [id]: attr,
        },
      });
    }
  };

  render() {
    const { product } = this.props;
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
                    onClick={this.setAttributes}
                    selectedAttrs={this.state.selectedAttrs}
                  />
                ))}
              </Attributes>
            </div>
          ))}
          <PDPSubtitle>PRICE:</PDPSubtitle>
          <PDPPrice>
            <Price item={product} />
          </PDPPrice>
          <div
            onClick={() =>
              this.context.addItem(
                product.id,
                product,
                this.state.selectedAttrs
              )
            }
          >
            {product.inStock && (
              <Button
                primary
                large
                isDisabled={
                  Object.keys(this.state.selectedAttrs).length !==
                  product.attributes.length
                }
              >
                ADD TO CART
              </Button>
            )}
          </div>
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