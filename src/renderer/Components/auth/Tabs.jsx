import React from 'react';

const Tabs = ({ isSignUp, setIsSignUp }) => {
  return (
    <div className="flex w-4/5 max-w-md mb-6">
      <div
        onClick={() => setIsSignUp(true)}
        className={`flex-1 text-center py-2 cursor-pointer ${
          isSignUp
            ? 'border-b-2 border-purple-500 text-purple-500'
            : 'text-gray-500'
        }`}
      >
        Sign Up
      </div>
      <div
        onClick={() => setIsSignUp(false)}
        className={`flex-1 text-center py-2 cursor-pointer ${
          !isSignUp
            ? 'border-b-2 border-purple-500 text-purple-500'
            : 'text-gray-500'
        }`}
      >
        Sign In
      </div>
    </div>
  );
};

export default Tabs;
