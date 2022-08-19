import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import ProductList from './Pages/Products/product-list';
import ProductDescription from './Pages/Products/Product-description';
import { CartProvider } from './context/cart-context';
import Navbar from './Components/Navbar/navbar';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './Redux/reducers';
import ErrorPage from './Pages/error-page'
import BigCart from './Pages/Cart/bigcart';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const InfiniteRotate = styled.div`
  animation: ${rotate} 4s linear infinite;
`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currency: []
    }
  }
  render() {
    return (
      // <ApolloProvider client={client}>
      <CartProvider>
      {/* <Provider store={createStore(reducer)}> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList catagory />} />
          {/* <Route path="all" element={'About'} /> */}
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path='/cart' element={<BigCart/>}/>
        </Routes>
        {/* </Provider> */}
      </CartProvider> 
      // <InfiniteRotate>🥴</InfiniteRotate>
      // </ApolloProvider>
    );
  }
}

export default App;