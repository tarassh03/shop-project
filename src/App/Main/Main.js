import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductList'
import PaymentPage from './PaymentPage/Payment'
import ShippingPage from './ShippingPage/Shipping'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Main = ({
    addProductToCart,
    productInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>

            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            <Route path='/' exact render={() => <ProductList
                            addProductToCart={addProductToCart}
                            />} />
                            
                            <Route path='/cart' render={() => <CartPage
                                productInCart={productInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                             />} />
                            <Route path='/payment' component={PaymentPage} />
                            <Route path='/shipping' component={ShippingPage} />
                            <Route path='/' exact component={Testimonials}/>
                            
                        </div>
                        
                    </div>
                </div>
            </main>

        </>
     )
  }

  export default Main