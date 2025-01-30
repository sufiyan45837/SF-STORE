import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Remove item from cart
  const handleRemoveItem = (productTitle) => {
    const updatedCart = cartItems.filter(item => item.title !== productTitle);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update quantity (increase or decrease)
  const handleQuantityChange = (productTitle, action) => {
    const updatedCart = cartItems.map(item => {
      if (item.title === productTitle) {
        return {
          ...item,
          quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Proceed to Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout", { state: { cart: cartItems } });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="border p-4 rounded shadow-md">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-600">Price: Rs {item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.title, "decrease")}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.title, "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-bold">Total: Rs {item.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.title)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Cart Total</h2>
            <p>Subtotal: Rs {calculateSubtotal()}</p>
            <p>Shipping: Free</p>
            <p className="font-bold text-lg">Total: Rs {calculateSubtotal()}</p>
            <button
              className="bg-red-500 text-white w-full py-2 rounded mt-4"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
