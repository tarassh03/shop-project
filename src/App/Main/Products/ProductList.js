import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = ()  =>  {

    return (
            <>

            <h2 className="page-title">Product List</h2>
                <div className="row">

                    {
                        products.map(({
                            id,
                            name,
                            description,
                            type,
                            capacity,
                            price,
                        }) => (
                            <div className="col-lg-6" key={id}>
                            <ProductListItem
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            />
                        </div>
                        ))
                    }

                </div>
         
             </>


    )
}


export default ProductList