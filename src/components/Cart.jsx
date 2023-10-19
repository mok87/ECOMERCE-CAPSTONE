import React from "react";
import { useSelector } from "react-redux";
import store from "../redux/store";


const Cart = () => {
  const handleCart = useSelector((state) => state.handleCart);

  // Log the state to the console to check if it contains the cart items
  console.log("Cart Items:", handleCart);

  return (
    <div>
      {handleCart.map((Item) => (
        <div key={Item.id}>
          <p>{Item.title}</p>
          <p>${Item.price}</p>
          <p>Quantity: {Item.qty}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

