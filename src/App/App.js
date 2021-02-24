import React, { Component } from 'react';

import '../common/style/reset.css'
import '../common/style/base.css'


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

    removeProductFromCart(id) {
      this.setState((prevState) => {
        
        let prevProductsInCart = {...prevState.productInCart}

        delete prevProductsInCart[id];

        return {
          productInCart:prevProductsInCart
        }
      })
    }
   
   
    render() {
      return (
        <>
            <Header
              productInCart={this.state.productInCart}
            />
            <button onClick={() => this.removeProductFromCart(2)}>Delete Product</button>
            <Main
              addProductToCart={this.addProductToCart}
              productInCart={this.state.productInCart}
             />
            <Footer/>
        </>
     )
    }

  }
    
  export default App