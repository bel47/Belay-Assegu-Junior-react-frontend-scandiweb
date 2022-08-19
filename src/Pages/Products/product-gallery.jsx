import React, { Component } from "react";
import {
  Thumbnail,
  SliderImage,
  CurrentImageContainer,
} from "./product-list-styles";

export class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: null,
      // gallery: props.gallery,
    };
  }

  imageClickHandler = (image) => {
    this.setState({ currentImage: image });
  };

  render() {
    const { gallery, selectedImage } = this.props;
    return (
      <>
        <Thumbnail>
          {gallery.map((image, index) => (
            <SliderImage key={index + "container"}>
              <img
                src={image}
                key={index}
                onClick={() => this.imageClickHandler(image)}
                alt="slider selector"
              />
            </SliderImage>
          ))}
        </Thumbnail>
        <CurrentImageContainer>
          <img
            src={
              this.state.currentImage ? this.state.currentImage : selectedImage
            }
            alt="current item"
          />
        </CurrentImageContainer>
      </>
    );
  }
}

export default ProductGallery;
