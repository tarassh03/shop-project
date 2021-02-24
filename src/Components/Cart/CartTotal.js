import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../../App/Main/Products/products'

const CartTotal = ({
    productInCart,
    productsObject = getProductsObject(products)
}) => {
    return (
        <div>
            Total: 
                {
                    keys(productInCart).reduce((total,productId) => (
                            total + (productsObject[productId].price * productInCart[productId])
                    ),0)
                }
            $  
        </div>
    )
}

export default CartTotal