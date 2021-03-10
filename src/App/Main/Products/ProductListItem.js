import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import Quantity from '../../../Components/Quantity/Quantity'


    class ProdustListItem extends Component {

        state = {
            productCount:1,
         }


         onIncrementClick = () => {
             
            this.setState ((prevState) => ({
                productCount: prevState.productCount + 1
             }))
        }
    
        onDecrementClick = () => {
             
            this.setState ((prevState) => ({
                productCount: prevState.productCount - 1
             }))
        }
        


          render() {

            const {
                id,
                name,
                description,
                type,
                capacity,
                price,
                image,
                addProductToCart,

            } = this.props;

            return (
                <div className="product-list-item">
                    <div className="product-image"> 
                    <img src={image} alt={name}/>
                    </div>
    
                    <div className="product-title">{name}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity}Gb</div>
                    <Quantity
                        onDecrementClick = {this.onDecrementClick}
                        onIncrementClick = {this.onIncrementClick}
                        productCount = {this.state.productCount}
                        minCount={1}
                    />
                    <div className="product-price">$ {price}</div>
                    <div className="btn-add-to-cart"
                        onClick={() => addProductToCart(id,this.state.productCount)}
                    >Add to cart</div>
    
                </div>
    
        )
        }

    }



ProdustListItem.PropTyper = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
    

}

ProdustListItem.defaultProps = {
    description:"No description ...",
    image:"images/no-image.png"
    
}

export default ProdustListItem