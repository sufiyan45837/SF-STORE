import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cart = state?.cart || [];

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const calculateSubtotal = () =>
    cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discount) / 100;
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10); // Example of a 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Append access key to the form data (Make sure this key is valid)
    formData.append("access_key", "231a9b4f-55bc-41c0-b5b0-169398579391"); // Web3Forms API Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Check if the response status is OK
      if (!response.ok) {
        setResult("Failed to submit. Please try again.");
        console.error("Response status: ", response.status);
        return;
      }

      // Try to parse the response as JSON
      let data;
      try {
        data = await response.json();
      } catch (error) {
        data = await response.text(); // In case the response is not JSON
      }

      // Log the response to check what was returned
      console.log("Response:", data);

      if (data.success) {
        setResult("Order Placed Successfully");
        event.target.reset(); // Reset form after success
        navigate("/Home"); // Redirect to home page or any other relevant page
      } else {
        setResult(data.message || "Failed to place order.");
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error placing order:", error);
      setResult("Error occurred while placing order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>

          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={billingDetails.firstName}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="Porduct Name and porduct number same name "
              placeholder="Porduct Name and porduct number"
              value={billingDetails.companyName}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address*"
              value={billingDetails.streetAddress}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, Floor, etc. (Optional)"
              value={billingDetails.apartment}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="Town/City*"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              value={billingDetails.phone}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
            <div className="flex items-center">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
            </div>
            <button
              className="bg-red-500 text-white w-full py-2 mt-4 rounded hover:bg-red-600"
              type="submit"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>

          <div className="border rounded-lg p-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.title}</span>
                <span>Rs: {item.price * item.quantity}</span>
              </div>
            ))}

            <div className="flex justify-between border-t pt-4 mt-4">
              <span>Subtotal:</span>
              <span>Rs: {calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-4 mt-4">
              <span>Total:</span>
              <span>Rs: {calculateTotal()}</span>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Coupon Code</label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Enter coupon code"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result message */}
      <div className="text-center mt-4">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Checkout;
