import { useState } from "react";
import { ShoppingCart, Eye, Trash } from "lucide-react";

const Wishlist = [
  { id: 1, name: "Gucci Duffle Bag", price: 950, oldPrice: 1100, discount: "-35%", img: "bag.png" },
  { id: 2, name: "RGB Liquid CPU Cooler", price: 190, img: "cooler.png" },
  { id: 3, name: "GP11 Shooter Gamepad", price: 150, img: "gamepad.png" },
  { id: 4, name: "Quilted Satin Jacket", price: 770, img: "jacket.png" },
];

const recommendations = [
  { id: 5, name: "ASUS FHD Gaming Laptop", price: 950, oldPrice: 1100, discount: "-35%", img: "laptop.png" },
  { id: 6, name: "IPS LCD Gaming Monitor", price: 190, img: "monitor.png" },
  { id: 7, name: "HAVIT HV-G92 Gamepad", price: 50, tag: "NEW", img: "red-gamepad.png" },
  { id: 8, name: "AK-900 Wired Keyboard", price: 200, img: "keyboard.png" },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(wishlistItems);

  return (
    <div className="p-6 bg-white">
      {/* Wishlist Section */}
      <h2 className="text-2xl font-bold mb-4">Wishlist ({wishlist.length})</h2>
      <div className="grid grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg">
            <img src={item.img} alt={item.name} className="h-32 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-red-500 font-bold">${item.price} <span className="text-gray-500 line-through">${item.oldPrice}</span></p>
            <button className="w-full bg-black text-white py-2 mt-2 flex items-center justify-center">
              <ShoppingCart size={16} className="mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Recommendations Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Just For You</h2>
      <div className="grid grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg">
            <img src={item.img} alt={item.name} className="h-32 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-red-500 font-bold">${item.price}</p>
            <button className="w-full bg-black text-white py-2 mt-2 flex items-center justify-center">
              <ShoppingCart size={16} className="mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-8 mt-12">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-bold">Exclusive</h3>
            <p>Get 10% off your first order</p>
            <input type="email" placeholder="Enter your email" className="p-2 rounded mt-2 w-full text-black" />
          </div>
          <div>
            <h3 className="font-bold">Support</h3>
            <p>Dhaka, Bangladesh</p>
            <p>Email: support@email.com</p>
            <p>Phone: +880-1234-5678</p>
          </div>
          <div>
            <h3 className="font-bold">Account</h3>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
          </div>
          <div>
            <h3 className="font-bold">Download App</h3>
            <p>[QR Code Image]</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
