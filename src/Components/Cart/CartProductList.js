import React from 'react'
import {keys} from 'lodash'
import products,{ getProductsObject } from '../../App/Main/Products/products'

const CartProductList = ({
    productInCart,
    productsObject = getProductsObject(products)
}) => {
    return (
        <div>
                {
                    keys(productInCart).map((id) => 
                        <div key={id}>{productsObject[id].name} : {productInCart[id]}</div>
                    )
                }
        </div>
    )
}
export default CartProductList