import React, { Component } from "react";
import { CarrouselContainer, CaroselButton } from "./bigcart.styles";
import Next from '../../Assets/carrouselnext.svg'
import Prev from '../../Assets/carrouselprev.svg'

export class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  nextImg = () => {
    this.setState({
      currentImageIndex: this.state.currentImageIndex + 1,
    });
  };

  prevImg = () => {
    this.setState({
      currentImageIndex: this.state.currentImageIndex - 1,
    });
  };

  render() {
    const { gallery } = this.props;
    return (
      <CarrouselContainer>
        <img
          src={gallery.at(this.state.currentImageIndex)}
          alt="Current item"
        />
        <CaroselButton>
          {this.state.currentImageIndex > 0 ? (
            <div onClick={() => this.prevImg()}>
              <img src={Prev} alt="prev" />
            </div>
          ) : (
            <div className="carrouselButtonPlaceholder"></div>
          )}
          {this.state.currentImageIndex < gallery.length - 1 ? (
            <div onClick={() => this.nextImg()}>
              <img src={Next} alt="next" />
            </div>
          ) : (
            <div className="carrouselButtonPlaceholder"></div>
          )}
        </CaroselButton>
      </CarrouselContainer>
    );
  }
}

export default Carrousel;
