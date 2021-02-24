import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import products,{getProductsObject} from '../../Main/Products/products'
import {Link} from 'react-router-dom'


const Cart = ({
    productInCart,
    productsObject = getProductsObject(products)
}) => {
    return (
        <>
                <div className="cart text-center">
                {
                    keys(productInCart).map((id) => 
                        <div key={id}>{productsObject[id].name} : {productInCart[id]}</div>
                    )
                }
                <div>
                    Total: 
                        {
                            keys(productInCart).reduce((total,productId) => (
                                    total + (products[productId].price * productInCart[productId])
                            ),0)
                        }
                    $  
                </div>
                        <Link to='./cart'>Show cart </Link>
            
             </div>

        </>
    )
}

export default Cart