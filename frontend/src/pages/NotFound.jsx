import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/login"
        className="text-blue-600 underline hover:text-blue-800 transition"
      >
        Go back to Login Page
      </Link>
    </div>
  );
};

export default NotFound;
