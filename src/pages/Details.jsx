import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import controller from "../component/controller.png";
import keyboard from "../component/keyboard.png";
import moniter from "../component/moniter.png";
import cpu from "../component/cpu.png";

// Images
const image1 = "https://tse4.mm.bing.net/th?id=OIP.pShqe38IWf8QU0kRKGnaigHaGk&pid=Api&P=0&h=220";
const image2 = "https://tse3.mm.bing.net/th?id=OIP.O5TlrD_7JLFnlpLAYkykBgHaHa&pid=Api&P=0&h=220";
const image3 = "https://tse2.mm.bing.net/th?id=OIP.eQpwglPSCmUrqMyYzRBSywHaHa&pid=Api&P=0&h=220";
const image4 = "https://techie.com.bd/wp-content/uploads/2019/09/Havit-HV-G92-Vibration-Gaming-Pad-Red-1024x1024.jpg";
const image5 = "https://tse1.mm.bing.net/th?id=OIP.CxQ6mV82q_PwDfi5TWU5zgAAAA&pid=Api&P=0&h=22";
const image6 = "https://tse3.mm.bing.net/th?id=OIP.9ZR_7E3pSFpAsMM3dRS8UAHaHU&pid=Api&P=0&h=220";
const keyboardImage1 = "https://tse1.mm.bing.net/th?id=OIP.dlT2wqS0PhvkLi3VJ84l4wHaEK&pid=Api&P=0&h=220";
const keyboardImage2 = "https://tse2.mm.bing.net/th?id=OIP.i2tXTyRSqwsA5o0qubtsyQHaE1&pid=Api&P=0&h=220";
const headphoneImage = "https://tse1.mm.bing.net/th?id=OIP.Q2kzQRsaUgpzEr5RWLkgvgHaHa&pid=Api&P=0&h=220"; // Headphone image
const cpuImage1 = "https://tse2.mm.bing.net/th?id=OIP.rFn-k10nR4bSWh6S7XYAzgHaEH&pid=Api&P=0&h=220"; // CPU image

const Details = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: controller,
      title: "HAVIT HV-G92 Gamepad",
      price: 1000,
      oldPrice: 1500,
      description: "PlayStation 6 Controller skin High-quality vinyl with air channel adhesive.",
      colors: ["#FF0000", "#0000FF"],
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: true,
      images: [controller, image4, image5, image6],
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
      images: [keyboard, keyboardImage1, keyboardImage2],
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
      images: [moniter, image1, image2, image3],
    },
    {
      id: 4,
      image: headphoneImage,
      title: "Gaming Headphone",
      price: 3000,
      oldPrice: 4000,
      description: "High-quality headphones with immersive surround sound.",
      colors: ["#FFFFFF", "#000000"],
      stock: true,
      images: [headphoneImage],
    },
    {
      id: 5,
      image: cpu,
      title: "Gaming CPU",
      price: 90000,
      oldPrice: 110000,
      description: "High-performance gaming CPU with overclocking support.",
      colors: ["#000000"],
      sizes: [],
      stock: true,
      images: [cpu, cpuImage1],
    },
  ];

  const product = products[0]; // Defaulting to first product for demonstration
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    navigate("/cart", { state: { product } });
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="p-8">
      <p className="text-gray-500 mb-4">Account / Gaming / {product.title}</p>

      <div className="grid grid-cols-12 gap-8">
        {/* Product Images */}
        <div className="col-span-4">
          <div className="border rounded-lg p-4">
            <img src={selectedImage} alt={product.title} className="w-full h-64 object-contain" />
          </div>
          <div className="flex mt-4 space-x-2">
            {product.images.map((img, idx) => (
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

        {/* Product Details */}
        <div className="col-span-5">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-green-500 font-semibold mb-1">{product.stock ? "In Stock" : "Out of Stock"}</p>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-bold text-gray-700">PKR {product.price.toLocaleString()}</p>
            <p className="text-xl text-gray-500 line-through">PKR {product.oldPrice.toLocaleString()}</p>
          </div>
          <p className="text-gray-600 my-4">{product.description}</p>

          {/* Colors */}
          <p className="font-semibold">Colors:</p>
          <div className="flex space-x-2 my-2">
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 my-4">
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
