import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../component/google.png"; // Replace with your actual Google icon path
import fo from "../component/fo.png"; // Replace with your side image path

function Signup() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showSignUp, setShowSignUp] = useState(true); // Toggle between signup and login forms
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone); // Optional, for additional info
    formData.append("message", "New user signup");
    formData.append("access_key", "231a9b4f-55bc-41c0-b5b0-169398579391"); // Corrected access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Signup successful! You can now log in.");
        setTimeout(() => {
          setShowSignUp(false); // Switch to login form after successful signup
        }, 2000); // Switch after a short delay
      } else {
        setResult(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;

    if (email && password) {
      alert("Login successful!");
      navigate("/Home"); // Redirect to home page on successful login
    } else {
      setResult("Please provide valid email and password.");
    }
  };

  const handleGoogleSignUp = () => {
    const mockGoogleEmail = "sufiyanfaheem281@gmail.com"; // Simulated Google sign-in email
    setFormState((prev) => ({ ...prev, email: mockGoogleEmail }));
    alert(`Signed in with Google account: ${mockGoogleEmail}`);
    navigate("/Home"); // Redirect to home page after signing in with Google
  };
  const goToHome = () => {
    navigate("/Home");  // This will navigate to the Home page
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 w-full max-w-screen-lg">
        {/* Image Section */}
        <div className=" md:block">
          <img src={fo} alt="Side" className="" />
        </div>
        {/* Form Section */}
        <div className="w-full max-w-md shadow-md rounded-lg p-6 space-y-4">
          <h1 className="text-4xl font-bold mb-6">
            {showSignUp ? "Sign Up on SF Store" : "Login to SF Store"}
          </h1>

          {showSignUp ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                placeholder="Create Password"
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className={`w-full p-2 rounded-lg ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-blue-600"
                } text-md font-bold transition`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create an account"}
              </button>
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="flex items-center justify-center gap-2 w-full bg-yellow-400 font-bold p-2 rounded-lg hover:bg-blue-700 transition border border-black"
                style={{ border: "2px solid black" }}
              >
                <img src={google} alt="Google Icon" className="w-5 h-5" />
                Sign Up with Google
              </button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                placeholder="Your Password"
                required
                className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
               <button
      type="button"
      className="w-full bg-red-600 p-2 rounded-lg hover:bg-blue-600 transition"
      onClick={() => navigate("/Home")} // Navigate to home page on click
    >
      Login
    </button>
            </form>
          )}

          <div className="mt-4 text-lg font-medium text-center">
            {showSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={() => setShowSignUp(!showSignUp)}
              className="text-blue-500 hover:underline"
            >
              {showSignUp ? "Login" : "Sign Up"}
            </button>
          </div>
          <span className="mt-4 text-lg font-medium">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
