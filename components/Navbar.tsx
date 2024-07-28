import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-500 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center lg:justify-start space-x-8 lg:space-x-12 text-xl">
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/'>
              <div className="hover-border-b">Home</div>
            </Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/about'>
              <div className="hover-border-b">About</div>
            </Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/contact'>
              <div className="hover-border-b">Contact</div>
            </Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/services'>
              <div className="hover-border-b">Services</div>
            </Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/gallery'>
              <div className="hover-border-b">Gallery</div>
            </Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out transform hover:scale-105">
            <Link href='/reviews'>
              <div className="hover-border-b">Reviews</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;















