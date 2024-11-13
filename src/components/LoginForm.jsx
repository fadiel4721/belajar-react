import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const LoginForm = () => {
  const { login, isLoggedIn } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password); // Panggil fungsi login dari context
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect ke halaman home jika berhasil login
    }
  }, [isLoggedIn, navigate]);

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Enter your password"
        />
      </div>

      
      <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 bg-gray-700 rounded focus:ring-teal-400" />
          Remember me
        </label>
        <a href="/forgot-password" className="hover:underline">Forgot your password?</a>
      </div>

    
      <button
        type="submit"
        className="mt-6 w-full bg-teal-400 text-white py-2 rounded-md font-semibold hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
