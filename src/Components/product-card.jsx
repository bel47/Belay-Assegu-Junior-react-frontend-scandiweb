import React, { Component } from "react";
import { Card, ImagePreview } from "./product-card-styles";
// import styled from 'styled-components';

// const Button = styled.button`
//   color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   background: ${props => props.theme.bg};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <ImagePreview>
          <img src={this.props.item.gallery[0]} alt="Preview" />
          {/* {!this.state.inStock && (
            <div className={classes.outOfStockOverlay}>
              <p>Out of Stock</p>
            </div>
          )} */}
        </ImagePreview>
      </Card>
    );
  }
}

export default ProductCard;
