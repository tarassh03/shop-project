import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productInCart,
}) => {
    return (
        <>
            <h1 className='page-title'>Cart</h1>
                <CartProductList
                    CartItem={CartProductListItemExtended}
                    productInCart={productInCart}
                />

                <CartTotal
                    productInCart={productInCart}
                />
         </>


    )
}

export default CartPage