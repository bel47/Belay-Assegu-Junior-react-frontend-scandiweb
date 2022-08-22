import React, { Component } from "react";
import {
  PDPContainerLeft,
  PDPTumbnailContainer,
  PDPContainerRight,
} from "./products-styles";
import { fetchProductAPI } from "../../Services/Api";
import withRouter from "./withRouter";
import ProductGallery from "../../Components/ProductDescription/product-gallery";
import ProductAttributes from "../../Components/ProductDescription/product-attributes";

export class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      gallery: [],
      id: this.props.params.id,
    };
  }

  getData = async (id) => {
    fetchProductAPI(id).then((res) => {
      this.setState({
        product: res.data.product,
        gallery: res.data.product.gallery,
      });
    });
  };

  componentDidMount() {
    this.getData(this.state.id);
  }

  render() {
    return (
      <>
        <PDPContainerLeft>
          <PDPTumbnailContainer>
            <ProductGallery
              gallery={this.state.gallery}
              selectedImage={this.state.gallery.at(0)}
            />
          </PDPTumbnailContainer>
        </PDPContainerLeft>

        <PDPContainerRight>
          <ProductAttributes product={this.state.product} />
        </PDPContainerRight>
      </>
    );
  }
}

export default withRouter(ProductDescription);