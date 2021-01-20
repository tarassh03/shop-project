import React from 'react'


import './header.css'


import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

const Header = () => {
    return (
        <>
        
        <div className="header">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-3">

                            <Logo/>                                
                        </div>
                        <div className="col-lg-6">
                            
                            <Menu/>                                
                        </div>
                        <div className="col-lg-3">

                            <Cart/>                                
                        </div>
                    </div>
            </div>
        </div>


        </>
     )
  }


  export default Header