import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import store from "../redux/store";
import { updateQty, delCart } from '../redux/actions/index'


const Cart = () => {
  const dispatch = useDispatch();
  const handleCart = useSelector((state) => state.handleCart); // Use the correct state slice name (e.g., "cart")
  const removeFromCart = (itemId) =>{
    // Call the "removeFromCart" action with the itemId
    dispatch(delCart(itemId))};

    
    const updateQty = ({productId, newQty}) => {
      dispatch(updateQty(productId, newQty));
      const handleQtyChange = (newQty) => {
        // Dispatch the updateQuantity action with the product ID and new quantity
        dispatch(updateQty(productId, newQty));
      };
  
    };


  // Log the state to the console to check if it contains the cart items
  console.log("Cart Items:", handleCart,removeFromCart);

  return (
    <div>
      {handleCart.map((item) => (
        <div key={item.id}>
          <p>PRODUCT DETAILS</p>
          <img src={item.image} alt=""  height="400px"
            width="400px"/>
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.qty}</p>
          <button onClick={() => updateQty( item.id, item.qty + 1)}>+</button>
          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <button onClick={() => delCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

