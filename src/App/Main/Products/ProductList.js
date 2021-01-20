import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = ()  =>  {

    return (
            <>

            <h2 className="page-title">Product List</h2>
                <div className="row">


                     <div className="col-lg-6">
                        <ProductListItem
                            name="Iphone X"
                            description="This is Iphone X"
                            type="phone"
                            capacity="64"
                            price="500"
                        />
                    </div>

                    <div className="col-lg-6">
                        <ProductListItem
                            name="Iphone 12"
                            description="This is Iphone 12"
                            type="phone"
                            capacity="256"
                            price="1500"
                        />
                    </div>

                    <div className="col-lg-6">
                        <ProductListItem
                            name="Iphone XS"
                            description="This is Iphone XS"
                            type="phone"
                            capacity="128"
                            price="1000"
                         />
                    </div>

                    <div className="col-lg-6">
                        <ProductListItem
                            name="Iphone X"
                            description="This is Iphone 8 Plus"
                            type="phone"
                            capacity="64"
                            price="500"
                        />
                    </div>


                    
                </div>
         
             </>


    )
}


export default ProductList