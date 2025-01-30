import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="text-center h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-4xl font-semibold text-gray-900 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-700 mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={goToHome}
        className="mt-6 px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-orange-700 transition duration-300"
      >
        Back To Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
