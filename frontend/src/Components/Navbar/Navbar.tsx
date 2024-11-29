import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home Link */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold">The Daily News Summary</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-200 transition duration-300">
              Home
            </a>
            <Link to="/design" className="hover:text-blue-200 transition duration-300">
              Design Artifacts
            </Link>
            <Link to="/articles" className="hover:text-blue-200 transition duration-300">
              View Articles
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a href="/" className="block py-2 hover:text-blue-200 transition duration-300">
              Home
            </a>
            <a href="/design" className="block py-2 hover:text-blue-200 transition duration-300">
              Design Artifacts
            </a>
            <a href="/articles" className="block py-2 hover:text-blue-200 transition duration-300">
              View Articles
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;