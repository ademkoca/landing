import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Product from '../components/Product';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';
import { products, team } from '../data';

const title = 'font-bold text-xl md:text-5xl mb-8 mt-12 text-center';

const Landing = () => {
  return (
    <div className="bg-white h-screen">
      {/* <Nav /> */}
      <main className="p-3">
        <Hero />
        <div className={title}>Products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>

        <div className={title}>Our Team</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((person) => (
            <Team person={person} key={person.id} />
          ))}
        </div>
        {/* <Subscribe title={title} /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
