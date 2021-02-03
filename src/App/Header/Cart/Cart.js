import React from 'react'

import './cart.css'

const Cart = ({
    count,
    price,
}) => {
    return (
        <>
                <div className="cart text-center">
                    <div className="products-count">{price}</div>
                    <div className="products-price">$ {count}</div>
                </div>

        </>
    )
}

export default Cart