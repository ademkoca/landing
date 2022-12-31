import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication here using email and password
    // If successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="font-bold text-2xl mb-6 text-center text-blue-700">
          Login
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-bold text-gray-700 text-lg mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block font-bold text-gray-700 text-lg mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="btn bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Login
          </button>
        </div>
        <div className="text-center text-gray-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-700 font-bold">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
