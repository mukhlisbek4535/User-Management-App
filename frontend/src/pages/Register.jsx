import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h3 className="text-lg font-semibold mb-4">Error</h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user?.token) {
          localStorage.setItem("token", data.user.token);
          setIsLoggedIn(true);
          navigate("/users");
        } else if (data.error) {
          setErrorMessage("This email is already registered. Try another one");
        } else {
          alert("Registration failed");
        }
      })
      .catch((err) => console.error("Something went wrong", err));
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="rounded-3xl bg-white/70 backdrop-blur-md p-10 shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700 font-sans tracking-wide">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
      <ErrorModal message={errorMessage} onClose={() => setErrorMessage("")} />
    </div>
  );
};

export default Register;
