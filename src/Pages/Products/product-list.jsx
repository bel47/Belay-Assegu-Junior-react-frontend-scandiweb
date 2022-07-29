import React, { Component } from "react";
import { fetchProductsAPI } from "../../Services/Api";
import ProductCard from "../../Components/product-card";
import {ProductsListContainer, ProductsList, CategoryName} from './product-list-styles';

// Button component that'll render an <a> tag with some styles

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedCatagory: null,
    };
  }

  getData = async () => {
    // let res = await client.query({
    //   query: GET_CURRENCIES
    // })
    //  console.log()
    // // Set the state to make changes in UI
    fetchProductsAPI("clothes").then((res) => {
      console.log(res);
      this.setState({ 
        products: res.data.category.products,
        selectedCatagory: 'clothes'});
    });
  };

  componentDidMount() {
    this.getData();
    console.log(this.props.item)
  }

  render() {
    return (
      <ProductsListContainer>
        <CategoryName>Category: {this.state.selectedCatagory}</CategoryName>
        <ProductsList>
        <div className="indexView">
          {this.state.products &&  this.state.products.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            }
      </div>
        </ProductsList>
      </ProductsListContainer>

      //      <div className='indexContainer'>
      //      {/* <h1 className='categoryTitle'>{this.context.currentCategory}</h1> */}
      //      <div className='indexView'>
      //          {
      //            // console.log(this.state.currency)
      //              this.state.currency ?
      //                  this.state.currency.map((d) =>

      //                      <p key={d.label}>{d.label} +" "+ {d.symbol}</p>
      //                  )
      //                  : null
      //              // console.log( this.state.currency.data)
      //          }
      //      </div>
      //  </div>
    );
  }
}

export default ProductList;
