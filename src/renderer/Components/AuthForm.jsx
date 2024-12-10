import React, { useState } from 'react';
import Tabs from './Tabs';
import logo from '../../assests/images/Layer_1.svg';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#8370FD] to-white">
      {/* Card */}
      <div className="flex flex-row bg-white shadow-xl rounded-2xl w-[90%] max-w-4xl h-[70%]">
        {/* Left Side (Logo) */}
        <div className="flex-1 flex items-center justify-center bg-[#8370FD] rounded-l-2xl">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] h-[150px] object-contain"
          />
        </div>

        {/* Right Side (Login/Signup Form) */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-6">
          <Tabs isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
          <form className="flex flex-col w-full max-w-xs gap-4" onSubmit={handleLogin}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit" 
              className="p-3 bg-[#8370FD] text-white rounded-md font-bold hover:bg-purple-600"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <div className="mt-4 text-gray-600">
            {isSignUp ? 'Have an Account?' : "Don't have an Account?"}{' '}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-purple-500 font-bold cursor-pointer hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
