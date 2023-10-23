import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// this button should only be visible to users who have authenticated - users who have not logged in should s
// see an error/prompt telling them to log in
const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn;
