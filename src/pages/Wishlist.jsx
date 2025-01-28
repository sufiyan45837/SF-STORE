import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.title === product.title);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));  // update in local storage
  };

  return (
    <div className="pt-8 ml-8 relative">
      <h2>Your Wishlist</h2>
      <div className="flex flex-wrap gap-12 pt-8">
        {wishlist.map((product, index) => (
          <div key={index} className="bg-slate-100 w-[270px] h-[300px]">
            <img src={product.image} alt={product.title} className="w-[190px] h-[180px] mx-auto" />
            <div className="pt-3 text-center">
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-red-500 text-md pt-6">Rs: {product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="font-normal w-[210px] text-xl py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
              >
                Add to cart
              </button>
              <button
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="font-normal w-[210px] text-xl py-2 mt-4 bg-red-500 text-white"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
