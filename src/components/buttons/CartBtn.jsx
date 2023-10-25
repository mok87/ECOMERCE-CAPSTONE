import React from 'react'
import { NavLink } from 'react-router-dom'



const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart (0)
            </NavLink>
        </>
    )
}

export default CartBtn;
