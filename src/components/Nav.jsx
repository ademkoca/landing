import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-black p-3 flex justify-between items-center">
      <Link to="/" className="text-white font-bold text-xl">
        Demek
      </Link>
      <form className="flex items-center">
        <input
          type="text"
          className="border p-2 w-full rounded-md"
          placeholder="Search"
        />
        <button className="btn bg-white text-black font-bold py-2 px-4 rounded-md ml-2">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
