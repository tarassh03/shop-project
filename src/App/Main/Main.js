import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductList'

const Main = ({
    addProductToCart,
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
                            
                            <Route path='/cart' component={CartPage} />

                            
                        </div>
                        
                    </div>
                </div>
            </main>

        </>
     )
  }

  export default Main