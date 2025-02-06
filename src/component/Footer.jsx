import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div>   <footer className="bg-black text-white py-10 px-5 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-semibold">SF STORE</h3>
          <p className="mt-2 text-gray-400">Get 10% off your first order</p>
          <div className="flex mt-3 border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-3 py-2 outline-none w-full"
            />
            <button className="bg-white text-black px-4">→</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="mt-2 text-gray-400">online store Delivery All over Pakistan</p>

          {/* Clickable Email */}
          <p className="mt-2 text-gray-400">
            <a href="mailto:sufiyanfaheem281@gmail.com" className="hover:underline">
              sufiyanfaheem281@gmail.com
            </a>
          </p>

          {/* Clickable WhatsApp Link */}
          <p className="mt-2 text-gray-400">
            <a
              href="https://wa.me/923331417145"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-400"
            >
              +92 333 1417145
            </a>
          </p>
        </div>


        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="/ManageAccount">My Account</a></li>
            <li><a href="/Signup">Login / Register</a></li>
            <li><a href="/Cart">Cart</a></li>
            <li><a href="/Whislist">Wishlist</a></li>
            <li><a href="/Home">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="mt-2 text-gray-400">Save $3 With App New User Only</p>
          <div className="flex space-x-2 mt-3">
            <img src="https://tse1.mm.bing.net/th?id=OIP.XddA3we5txwZAP4fAJtYRQHaHa&pid=Api&P=0&h=220" alt="QR Code" className="w-16" />
            <div className="flex flex-col space-y-2">
              <img src="https://tse1.mm.bing.net/th?id=OIP.LWK3SISFQXytVPR_WwQ0YgHaCt&pid=Api&P=0&h=220" alt="Google Play" className="w-24" />
              <img src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png" alt="App Store" className="w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaTiktok size={20} />
        </a>
        <a href="https://www.instagram.com/suh._store3?igsh=eDNsYnhpN2FsMm94" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer></div>
  )
}

export default Footer