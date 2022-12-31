import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover h-[100vh]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1563121167-bed76ebfa389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      <div className="flex flex-col items-end">
        <div className="text-right text-white font-bold text-xl md:text-5xl pt-32 pb-10 pr-20">
          Start now with Demek
        </div>
        <div className="text-right pr-20">
          <Link
            to="#"
            className="btn bg-white text-black font-bold py-2 px-4 rounded-full"
          >
            Explore Demek now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
