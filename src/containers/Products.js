import React, { Component } from 'react'
import { CartProvider } from 'react-use-cart';
import Cart from '../components/produits/productCard/Cart.js';
import Shop from '../components/produits/productCard/Shop.js';
import Slider from '../components/produits/Slider.js';


class Products extends Component {
  render() {
    return (
      <div>
          <Slider/>
          <CartProvider>
            <Shop/>
            <Cart/>

          </CartProvider>
      </div>
    )
  }
}


export default Products;