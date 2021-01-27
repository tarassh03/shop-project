import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import { render } from '@testing-library/react'

    class ProdustListItem extends Component {


        render() {

            const {
                name,
                description,
                type,
                capacity,
                price,
                image,

            } = this.props;

            return (
                <div className="product-list-item">
                    <div className="product-image"> 
                    <img src={this.props.image} alt={this.props.name}/>
                    </div>
    
                    <div className="product-title">{this.props.name}</div>
                    <div className="product-description">{this.props.description}</div>
                    <div className="product-features">Type: {this.props.type}</div>
                    <div className="product-features">Capacity: {this.props.capacity}Gb</div>
                    <div className ="product-quantity">
                        <button>-</button>
                        <input type="text" value="1" readOnly/>
                        <button>+</button>
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="btn-add-to-cart">Add to cart</div>
    
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