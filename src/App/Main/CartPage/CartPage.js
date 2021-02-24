import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'


const CartPage = ({
    productInCart,
}) => {
    return (
        <>
            <h1 className='page-title'>Cart</h1>
                <CartProductList
                    productInCart={productInCart}
                />

                <CartTotal
                    productInCart={productInCart}
                />
         </>


    )
}

export default CartPage