import React, { Component } from 'react';

import '../common/style/reset.css'
import '../common/style/base.css'

import {omit} from 'lodash'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

  class App extends Component {


    state = {
       productInCart: {
        1:3,
        2:4,
      }
    }

    addProductToCart = (id,count) => {
      this.setState((prevState) => ({
        productInCart: {
          ...prevState.productInCart,
          [id]: (prevState.productInCart[id] || 0) + count
        }

      }))
    }

    removeProductFromCart = (id) => {
      this.setState((prevState) => ({
        productInCart:omit(prevState.productInCart,[id])
      }))
    }

    changeProductQuantity = (productId,count) => {
      this.setState((prevState) => ({
        productInCart:{
          ...prevState.productInCart,
          [productId]:count
        }
      }))
    }
   
   
    render() {
      return (
        <>
            <Header
              productInCart={this.state.productInCart}
            />
            <Main
              addProductToCart={this.addProductToCart}
              productInCart={this.state.productInCart}
              removeProductFromCart={this.removeProductFromCart}
              changeProductQuantity={this.changeProductQuantity}
             />
            <Footer/>
        </>
     )
    }

  }
    
  export default App