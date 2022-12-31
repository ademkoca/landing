import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black p-3 flex justify-between items-center">
      <div className="text-white font-bold text-xs">
        Copyright &copy; 2022 Demek
      </div>
      <div>
        <Link to="#" className="text-white font-bold text-xs mr-6">
          Terms of Service
        </Link>
        <Link to="#" className="text-white font-bold text-xs mr-6">
          Privacy Policy
        </Link>
        <Link to="#" className="text-white font-bold text-xs">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
