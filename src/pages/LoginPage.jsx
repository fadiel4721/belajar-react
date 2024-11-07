import React from 'react';
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-400 flex justify-center items-center px-4">
      <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg relative">
        {/* Header Sign In */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-teal-400 text-center py-2 px-8 rounded-md shadow-md">
          <h1 className="text-lg font-semibold text-white">Sign In</h1>
        </div>

        {/* Profile Icon */}
        <div className="flex justify-center mb-8 mt-10">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
