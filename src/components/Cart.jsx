import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { NavLink } from 'react-router-dom'; // Import NavLink

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  return (
    <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8 p-10 text-black dark:text-white font-normal uppercase text-sm">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="absolute right-16 top-10">
        <button className="btn btn-outline-dark px-4 py-2" onClick={toggle}>
          Close
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div className="flex justify-between items-center" key={item.id}>
            <div className="flex gap-4">
              <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <NavLink to="/checkout"> {/* Add this NavLink */}
            <button className="btn btn-outline-dark px-4 py-2">
              Checkout
            </button>
          </NavLink>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </div>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
