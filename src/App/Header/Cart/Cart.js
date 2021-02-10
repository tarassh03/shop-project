import React from 'react'
import {keys} from 'lodash'

import './cart.css'

const Cart = ({
    productInCart,
}) => {
    return (
        <>
                <div className="cart text-center">
                {
                    keys(productInCart).map((id) => 
                        <div key={id}>{id} : {productInCart[id]}</div>
                    )
                }
                </div>

        </>
    )
}

export default Cart