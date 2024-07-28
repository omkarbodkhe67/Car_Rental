import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignedIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = username === "admin" && password === "password";

    if (isAuthenticated) {
      onSignIn(true);
      navigate("/home");
    } else {
      setShowError(true);
    }
  };

  const handleGuestSignIn = () => {
    onSignIn(true);
    navigate("/home");
  };

  return (
    <div className="bg-orange-300 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://unblast.com/wp-content/uploads/2021/10/Car-Rental-Illustration.jpg"
          alt="AI-Generated Car Rental Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        {showError && (
          <p className="mt-4 text-red-500">Incorrect username or password.</p>
        )}
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleGuestSignIn}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignedIn;
