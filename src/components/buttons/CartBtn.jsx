import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from "../context/cart"; // Replace with the actual path to your CartContext

const CartBtn = () => {
  const { cartItems } = useContext(CartContext); // Assuming cartItems is the state containing cart items

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems.length})
      </NavLink>
    </>
  );
};

export default CartBtn;

