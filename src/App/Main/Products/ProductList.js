import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = ()  =>  {

    return (
            <>

            <h2 className="page-title">Product List</h2>
                <div className="row">

                    {
                        products.map((product) => (
                            <div className="col-lg-6">
                            <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                            />
                        </div>
                        ))
                    }

                </div>
         
             </>


    )
}


export default ProductList