import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <h1 className='page-title'>Cart</h1>
                <CartProductList
                    CartItem={CartProductListItemExtended}
                    productInCart={productInCart}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />

                <CartTotal
                    productInCart={productInCart}
                />
         </>


    )
}

export default CartPage