import React from 'react';

const Subscribe = ({ title }) => {
  return (
    <>
      <div className={title}>Subscribe</div>
      <div className="flex justify-center">
        <div className="bg-black p-3 rounded-lg flex items-center">
          <input
            type="email"
            className="border p-2 w-full"
            placeholder="Enter your email"
          />
          <button className="btn bg-white text-black font-bold py-2 px-4 rounded-md ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
