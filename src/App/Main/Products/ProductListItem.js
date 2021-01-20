import React from 'react'
import './ProductListItem.css'

const ProdustListItem = () => {
    return (
            <div className="product-list-item">

                <div className="product-title">Iphone X</div>
                <div className="product-description">This is Iphone X</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-price">$ 500</div>
                <div className="btn-add-to-cart">Add to cart</div>

            </div>

    )
}

export default ProdustListItem