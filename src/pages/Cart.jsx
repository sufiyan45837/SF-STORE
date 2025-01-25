import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.title !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout", { state: { cart: cartItems } });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="border p-4 rounded">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p>Price: Rs {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="font-bold">Total: Rs {item.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.title)}  // Removed item by title
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Cart Total</h2>
            <p>Subtotal: Rs {calculateSubtotal()}</p>
            <p>Shipping: Free</p>
            <p>Total: Rs {calculateSubtotal()}</p>
            <button
              className="bg-red-500 text-white w-full py-2 rounded mt-4"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
