import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample products list (same as in the ProductList.jsx)
const products = [
  {
    id: 1,
    image: "controller.png",
    title: "HAVIT HV-G92 Gamepad",
    price: 1000,
    oldPrice: 1500,
    description: "PlayStation 6 Controller skin High-quality vinyl with air channel adhesive.",
    component: ["controller.png", "https://someimage.jpg", "https://anotherimage.jpg"],
  },
  {
    id: 2,
    image: "keyboard.png",
    title: "Gaming Keyboard",
    price: 2000,
    oldPrice: 2500,
    description: "A premium wired keyboard with ergonomic design.",
    component: ["keyboard.png", "https://keyboardimage.jpg", "https://otherkeyboardimage.jpg"],
  },
  {
    id: 3,
    image: "moniter.png",
    title: "HD Monitor",
    price: 50000,
    oldPrice: 60000,
    description: "IPS LCD Monitor with high-resolution display.",
    component: ["moniter.png", "https://monitorimage.jpg"],
  },
  {
    id: 4,
    image: "cpu.png",
    title: "Gaming CPU",
    price: 90000,
    oldPrice: 110000,
    description: "High-performance gaming CPU with overclocking support.",
    component: ["cpu.png", "https://cpuimage.jpg"],
  },
];

const Details = () => {
  const { productId } = useParams(); // Get productId from URL params
  const product = products.find((prod) => prod.id === parseInt(productId)); // Find the product based on the ID
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product?.component[0]);

  useEffect(() => {
    // In case the product is not found, navigate to a default page or show error
    if (!product) {
      navigate("/"); // Navigate to home if product is not found
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product.title}!`);
  };

  return (
    <div className="p-8">
      <p className="text-gray-500 mb-4">Account / Gaming / {product.title}</p>

      <div className="grid grid-cols-12 gap-8">
        {/* Product component */}
        <div className="col-span-4">
          <div className="border rounded-lg p-4">
            <img src={selectedImage} alt={product.title} className="w-full h-64 object-contain" />
          </div>
          <div className="flex mt-4 space-x-2">
            {product.component.map((img, idx) => (
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
          <p className="text-green-500 font-semibold mb-1">In Stock</p>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-bold text-gray-700">PKR {product.price.toLocaleString()}</p>
            <p className="text-xl text-gray-500 line-through">PKR {product.oldPrice.toLocaleString()}</p>
          </div>
          <p className="text-gray-600 my-4">{product.description}</p>

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
