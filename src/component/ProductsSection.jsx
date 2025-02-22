// ProductsSection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Discount from "../component/Discount.png";
import Fivestar from "../component/Five star.png";
import FillEye from "../component/Fill Eye.png";
import { ShoppingCartIcon, Speaker } from "lucide-react";

const ProductsSection = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Sample array of products. Adjust these details as needed.
  const products = [
    {
      id: 1,
      name: 'Ubl speaker high quality',
      image: Speaker, // imported icon component from lucide-react
      price: 1800,
      oldPrice: 2500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 2,
      name: "Hublot Black Dial Men's Watch",
      image:
        'http://cdn2.jomashop.com/media/catalog/product/h/u/hublot-classic-fusion-18k-gold-black-dial-men_s-watch-511.ox.1180.lr.jpg',
      price: 2500,
      oldPrice: 3500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 3,
      name: 'Rolex Submariner Blue',
      image:
        'https://toppng.com/uploads/preview/submariner-date-rolex-submariner-date-116618-11563269252pzhbhoa1cx.png',
      price: 5000,
      oldPrice: 6000,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 4,
      name: 'Airpods Pro 6 Wireless',
      image:
        'https://shopnow.com.pk/wp-content/uploads/2023/02/Airpods-Pro-6-Wireless.png',
      price: 1500,
      oldPrice: 2500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 5,
      name: 'Square Frame glasses for girls',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.y1sgc113SuKd2wzJ5rW2PQHaHa&pid=Api&P=0&h=220',
      price: 1000,
      oldPrice: 1800,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 6,
      name: 'Square plastic sun glasses for men,boys',
      image:
        'https://down-my.img.susercontent.com/file/0c6a90ac961b8fc329728a569302c449',
      price: 1800,
      oldPrice: 2500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 7,
      name: 'Shoes adidas for mens,boys and girl',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.xQOjVxov-h_O9d47MtLuxQAAAA&pid=Api&P=0&h=220',
      price: 1800,
      oldPrice: 2500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
    {
      id: 8,
      name: 'Slaonica bed sheet king size',
      image:
        'https://tse4.mm.bing.net/th?id=OIP.UjVumT0Aa-WcgXpf_NihSQHaH7&pid=Api&P=0&h=220',
      price: 2000,
      oldPrice: 2500,
      Discount: Discount,
      FillEye: FillEye,
      Fivestar: Fivestar,
    },
  ];

  // Function to add a product to the cart and navigate to the Cart page
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    console.log('Cart:', updatedCart);
    alert(`${product.name} added to cart!`);
    // Navigate to Cart page and pass the updated cart array via state
    navigate('/cart', { state: updatedCart });
  };

  return (
    <section className="m-4 md:m-6 lg:m-9">
      <div className="lg:pt-44">
        <p className="bg-[#DB4444] w-[20px] h-[40px] lg:ml-28">
          <h2 className="text-1xl font-semibold text-[#DB4444] lg:ml-12 w-[106px] h-[20px] lg:pt-3">
            Our Products
          </h2>
        </p>
        <h1 className="text-5xl font-semibold lg:ml-28 pt-[15px]">
          Explore Our Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:pt-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs mx-auto p-4 rounded-lg shadow-md"
          >
            <img src={product.Discount} alt="Discount" />
            <div className="relative">
              <img
                src={product.FillEye}
                alt="View Icon"
                className="absolute top-2 right-2 w-6 h-6"
              />
              {typeof product.image === 'string' ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 mx-auto h-40"
                />
              ) : (
                // If the product image is a component (like Speaker), render it directly.
                <product.image className="w-40 h-40 mx-auto" />
              )}
            </div>
            <button
              className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
              type="button"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCartIcon className="h-6 w-6 ml-28" />
            </button>
            <div className="pt-3 text-center">
              <h3 className="font-bold text-lg pt-3">{product.name}</h3>
              <p className="text-red-500 font-medium pt-2">
                Rs: {product.price}{' '}
                <span className="ml-4 text-gray-400 line-through">
                  Rs:{product.oldPrice}
                </span>
              </p>
              <h3 className="flex justify-center items-center pt-3">
                <img src={product.Fivestar} alt="Stars" className="w-20" />
                <span className="text-green-500 ml-2">in stock</span>
              </h3>
            </div>
          </div>
        ))}
        <div className="lg:ml-[170%] lg:pt-10">
          <button
            className="bg-red-500 w-[234px] h-[52px] font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
            type="button"
            onClick={() => navigate('/Porduct')} // Navigate to the main products page (adjust the path if needed)
          >
            View all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
