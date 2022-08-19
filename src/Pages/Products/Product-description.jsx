import React, { Component } from "react";
import {
  PDPContainerLeft,
  PDPTumbnailContainer,
  Thumbnail,
  ImageSliderImage,
  PDPContainerRight,
} from "./product-list-styles";
import { fetchProductAPI } from "../../Services/Api";
import withRouter from "./withRouter";
import ProductGallery from "./product-gallery";
import ProductAttributes from "./Product-attributes";

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

  // setImage = (newUrl) => {
  //   this.setState({
  //     currentImage: newUrl,
  //   });
  // };
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
