import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import ProductList from './Pages/Products/product-list';
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
      <div>
        <header>
          <h1>ALL
            CLOTHES
            TECH</h1>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="about" element={'About'} />
        </Routes>
      </div>
      // </ApolloProvider>
    );
  }
}

export default App;