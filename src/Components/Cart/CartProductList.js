import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productInCart,
    productsObject = getProductsObject(products),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <div>
                {
                    keys(productInCart).map((id) => 
                        <CartItem
                        key={id}
                        product={productsObject[id]}
                        productCount={productInCart[id]}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                        />
                        
                    )
                }
        </div>
    )
}
export default CartProductList