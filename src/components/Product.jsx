import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="bg-black p-6 rounded-lg">
      <img
        src={product.img}
        alt={product.name}
        className="w-full rounded-lg h-[80%]"
      />
      <div className="font-bold mt-3 text-lg">{product.name}</div>
      <div className="text-gray-300 text-sm">{product.desc}</div>
      <div className="mt-4">
        <button className="btn bg-white black font-bold py-2 px-4 rounded-md mr-2">
          Learn More
        </button>
        <button className="btn bg-white black font-bold py-2 px-4 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
