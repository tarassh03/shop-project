import React from 'react'
import {keys} from 'lodash'
import products from '../Products/products'

const productsObject = products.reduce((obj,product) =>({
    ...obj,
    [product.id]:product
}),{})

console.log(productsObject)

const CartPage = ({
    productInCart,
}) => {
    return (
        <>
            <h1 className='page-title'>Cart</h1>
            <div>
                {
                        keys(productInCart).map((id) => 
                            <div key={id}>{productsObject[id].name} : {productInCart[id]} == price {productsObject[id].price}
                            </div>
                        )
                } 
            </div>

            <div>
                Total: 
                    {
                        keys(productInCart).reduce((total,productId) => (
                                total + (products[productId].price * productInCart[productId])
                        ),0)
                    }
                $  
            </div>
         </>


    )
}

export default CartPage