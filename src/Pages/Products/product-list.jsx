import React, { Component } from "react";
import { fetchProductsAPI } from "../../Services/Api";
import ProductCard from "../../Components/ProductCard/product-card";
import CartContext from '../../context/cart-context'
import {
  ProductsListContainer,
  ProductsList,
  CategoryName,
} from "./product-list-styles";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedCatagory: null,
      currency: {},
    };
  }

  getData = async (cat) => {
     fetchProductsAPI(cat).then((res) => {
      this.setState({
        products: res.data.category.products,
        selectedCatagory: this.context.currentCategory,
      });
    });
  };

  componentDidMount() {
    this.getData(this.context.currentCategory);
  }
  componentDidUpdate(prevState) {
    if (prevState.selectedCatagory !== this.context.currentCategory) {
      this.getData(this.context.currentCategory);
    }
  }
  render() {
    return (
      <ProductsListContainer>
        <CategoryName>{this.context.currentCategory}</CategoryName>
        <ProductsList>
            {this.state.products &&
              this.state.products.map(product => (
                <ProductCard product={product} key={product.id} prices={product.prices} />
              ))}
        </ProductsList>
      </ProductsListContainer>
    );
  }
}

ProductList.contextType = CartContext

export default ProductList;
