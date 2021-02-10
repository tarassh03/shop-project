import React from 'react'

import './cart.css'

const Cart = ({
    productInCart,
}) => {
    return (
        <>
                <div className="cart text-center">
                {
                    Object.keys(productInCart).map((id) => 
                        <div key={id}>{id} : {productInCart[id]}</div>
                    )
                }
                </div>

        </>
    )
}

export default Cart