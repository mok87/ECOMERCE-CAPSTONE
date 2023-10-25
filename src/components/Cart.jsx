import React from "react";


const Cart = () => {
  


  // Log the state to the console to check if it contains the cart items


  return (
    <div>
      {/* {handleCart.map((item) => (
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
      ))} */}
    </div>
  );
};

export default Cart;


