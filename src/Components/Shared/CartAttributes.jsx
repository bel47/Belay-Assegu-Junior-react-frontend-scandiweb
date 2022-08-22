import React, { Component, Fragment } from "react";
import { AttrTitle, SwatchButton, AttributeButton } from "./shared.styles";
import CartContext from "../../context/cart-context";

export class CartAttributes extends Component {
  render() {
    const { product, type } = this.props;
    return product.item.attributes.map((attr, i) =>
      attr.type === "swatch" ? (
        <>
          <AttrTitle type={type}> {attr.id} </AttrTitle>
          <SwatchButton type={type}>
            {attr.items.map((item, i) => (
              <Fragment key={item + i}>
                <label htmlFor={item.id + product.order + product.i}>
                  <div
                    style={{
                      background: item.id === 'White'? "#F8F8FF" : `${item.value}`,
                      color:
                        product.selectedAttrs[attr.id] === item.value
                          ? "#FFFFFF"
                          : "#1D1F22",
                      outline:
                        product.selectedAttrs[attr.id] === item.value &&
                        "2px solid #5ECE7B",
                      border:
                        product.selectedAttrs[attr.id] === item.value &&
                        "2px solid #FFFFFF",
                    }}
                    onClick={() =>
                      this.context.setAttribute(
                        product.order,
                        attr.id,
                        item.value
                      )
                    }
                  ></div>
                </label>
              </Fragment>
            ))}
          </SwatchButton>
        </>
      ) : (
        <>
          <AttrTitle type={type}> {attr.id} </AttrTitle>
          <AttributeButton type={type}>
            {attr.items.map((item, i) => (
              <Fragment key={item + i}>
                <label
                  htmlFor={item.id + product.order + product.i}
                  style={{
                    backgroundColor:
                      product.selectedAttrs[attr.id] === item.value
                        ? "#1D1F22"
                        : "rgba(255, 255, 255, 0.2)",
                    color:
                      product.selectedAttrs[attr.id] === item.value
                        ? "#FFFFFF"
                        : "#1D1F22",
                  }}
                  onClick={() =>
                    this.context.setAttribute(
                      product.order,
                      attr.id,
                      item.value
                    )
                  }
                >
                  <span>{item.value}</span>
                </label>
              </Fragment>
            ))}
          </AttributeButton>
        </>
      )
    );
  }
}

CartAttributes.contextType = CartContext;
export default CartAttributes;
