import React from 'react'

import './header.css'


import Logo from './Logo'
import Menu from './Menu'
import Cart from './Cart'

const Header = () => {
    return (
        <>
        
        <div class="header">
            <div class="container">
                    <div class="row">
                        <div class="col-lg-3">

                            <Logo/>                                
                        </div>
                        <div class="col-lg-6">
                            
                            <Menu/>                                
                        </div>
                        <div class="col-lg-3">

                            <Cart/>                                
                        </div>
                    </div>
            </div>
        </div>


        </>
     )
  }


  export default Header