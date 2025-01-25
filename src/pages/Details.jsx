import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import controller from "../component/controller.png";
import keyboard from "../component/keyboard.png";
import moniter from "../component/moniter.png";
import cpu from "../component/cpu.png";

// New external images
const image1 = "https://tse4.mm.bing.net/th?id=OIP.pShqe38IWf8QU0kRKGnaigHaGk&pid=Api&P=0&h=220";
const image2 = "https://tse3.mm.bing.net/th?id=OIP.O5TlrD_7JLFnlpLAYkykBgHaHa&pid=Api&P=0&h=220";
const image3 = "https://tse2.mm.bing.net/th?id=OIP.eQpwglPSCmUrqMyYzRBSywHaHa&pid=Api&P=0&h=220";

const Details = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: controller,
      title: "HAVIT HV-G92 Gamepad",
      price: 1000,
      oldPrice: 1500,
      description:
        "PlayStation 6 Controller skin High-quality vinyl with air channel adhesive for easy bubble-free installation. Pressure-sensitive adhesive that removes cleanly.",
      colors: ["#FF0000", "#0000FF"],
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: true,
    },
    {
      id: 2,
      image: keyboard,
      title: "Gaming Keyboard",
      price: 2000,
      oldPrice: 2500,
      description: "A premium wired keyboard with ergonomic design.",
      colors: ["#000000"],
      sizes: [],
      stock: true,
    },
    {
      id: 3,
      image: moniter,
      title: "HD Monitor",
      price: 50000,
      oldPrice: 60000,
      description: "IPS LCD Monitor with high-resolution display.",
      colors: ["#000000", "#FFFFFF"],
      sizes: [],
      stock: false,
    },
    {
      id: 4,
      image: cpu,
      title: "RGBA Light Desktop HD",
      price: 80000,
      oldPrice: 90000,
      description: "High-performance desktop for gamers.",
      colors: ["#000000", "#FF4500"],
      sizes: [],
      stock: true,
    },
  ];

  const product = products[0]; // Replace with actual fetch logic from params
  const [selectedImage, setSelectedImage] = useState(product?.image || controller);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    navigate("/cart", { state: { product } });
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="p-8">
      <p className="text-gray-500 mb-4">Account / Gaming / {product.title}</p>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <div className="border rounded-lg p-4">
            <img src={selectedImage} alt={product.title} className="w-full h-64 object-contain" />
          </div>
          <div className="flex mt-4 space-x-2">
            {[product.image, image1, image2, image3].map((img, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-1 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Preview ${idx + 1}`} className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-green-500 font-semibold mb-1">{product.stock ? "In Stock" : "Out of Stock"}</p>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-bold text-gray-700">PKR {product.price.toLocaleString()}</p>
            <p className="text-xl text-gray-500 line-through">PKR {product.oldPrice.toLocaleString()}</p>
          </div>
          <p className="text-gray-600 my-4">{product.description}</p>

          <p className="font-semibold">Colours:</p>
          <div className="flex space-x-2 my-2">
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          {product.sizes.length > 0 && (
            <>
              <p className="font-semibold">Size:</p>
              <div className="flex space-x-4 my-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-1 border rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="flex items-center space-x-4 my-4">
            <div className="flex border rounded overflow-hidden">
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">-</button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center border-l border-r outline-none"
              />
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">+</button>
            </div>
            <button
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
