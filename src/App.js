import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import ProductList from './Pages/Products/product-list';
import { CartProvider } from './context/cart-context';
import Navbar from './Components/Navbar/navbar';

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
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList catagory />}  exact/>
          <Route path="all" element={'About'} />
        </Routes>
      </CartProvider>
      // </ApolloProvider>
    );
  }
}

export default App;