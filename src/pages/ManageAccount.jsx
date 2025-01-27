import React, { useState } from "react";
import userImage from "../component/my.png"; // Adjust path for your assets

export default function ManageAccount() {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState(userImage);
  const [activeTab, setActiveTab] = useState("profile");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = URL.createObjectURL(e.target.files[0]);
      setProfileImage(image);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>
            {/* Profile Image */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full shadow-lg border border-gray-200"
              />
              <label
                htmlFor="profileImageUpload"
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Change Image
              </label>
              <input
                id="profileImageUpload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={profileInfo.firstName}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={profileInfo.lastName}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profileInfo.email}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={profileInfo.address}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Save Changes</button>
          </form>
        );
      case "orders":
        return <div>Your Orders...</div>;
      case "wishlist":
        return <div>Your Wishlist...</div>;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="p-6">
      {/* Profile Tabs */}
      <div className="mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "profile" ? "bg-blue-600 text-white" : "bg-gray-200"
          } rounded-l`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-3 font-semibold ${
            activeTab === "wishlist" ? "bg-blue-600 text-white" : "bg-gray-200"
          } rounded-r`}
        >
          Wishlist
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
}
