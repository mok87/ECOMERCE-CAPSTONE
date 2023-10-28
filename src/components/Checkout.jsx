import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";

const Checkout = () => {
  const { clearCart } = useContext(CartContext); // Remove the 'cart' variable if not used
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // You can implement your checkout logic here
    // This is a simple example; replace it with actual logic
    alert(`Checkout successful! Thank you for your order.`);
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentInfo" className="form-label">
            Payment Information
          </label>
          <input
            type="text"
            className="form-control"
            id="paymentInfo"
            name="paymentInfo"
            value={formData.paymentInfo}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;
