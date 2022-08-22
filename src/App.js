import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/Products/product-list';
import ProductDescription from './Pages/Products/Product-description';
import { CartProvider } from './context/cart-context';
import Navbar from './Components/Navbar/navbar';
import BigCart from './Pages/Cart/bigcart';
import Footer from './Components/Footer';
import Alert from './Util/Alert';
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
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList catagory />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path='/cart' element={<BigCart/>}/>
        </Routes>
        {/* <Alert/> */}
        <Footer/>
      </CartProvider> 
    );
  }
}

export default App;