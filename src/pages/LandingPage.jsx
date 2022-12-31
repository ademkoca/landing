import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-facebook-blue-700">
      <div className="text-5xl font-bold text-white mb-6">
        Log in to Facebook
      </div>
      <form className="bg-white rounded-lg shadow-lg p-6">
        <input
          className="w-full p-2 rounded-lg text-gray-600 mb-4"
          type="email"
          placeholder="Email or Phone"
        />
        <input
          className="w-full p-2 rounded-lg text-gray-600 mb-4"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 rounded-lg text-white bg-facebook-blue-500 hover:bg-facebook-blue-600">
            Log In
          </button>
          <a className="text-blue-500 hover:text-blue-600" href="#">
            Forgot account?
          </a>
        </div>
      </form>
      <div className="text-xl text-gray-300 mb-6">
        Don't have an account?{' '}
        <a className="text-blue-500 hover:text-blue-600" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
