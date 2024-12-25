import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#F72C5B] text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold transition-transform transform hover:scale-110 duration-300">Axios-Crud-OPeration</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="nav-link text-lg font-medium relative group hover:underline">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-950 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/keshavchoudhary7" target='_blank' className="nav-link text-lg font-medium relative group hover:underline">
              Github
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-950 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/keshavchoudhary7/react-to-do-app/tree/main" target='_blank' className="nav-link text-lg font-medium relative group hover:underline">
              My Projects
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-950 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/keshavchoudhary/" target='_blank' className="nav-link text-lg font-medium relative group hover:underline">
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-950 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          {/* Additional links can be added here */}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 shadow-lg transition-transform transform">
          <ul className="space-y-4 text-center">
            <li>
              <a href="#" className="block text-lg font-medium">Home</a>
            </li>
            <li>
              <a href="https://github.com/keshavchoudhary7" target='_blank' className="block text-lg font-medium">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/keshavchoudhary/" target='_blank' className="block text-lg font-medium">About</a>
            </li>
            <li>
              <a href="https://github.com/keshavchoudhary7/react-to-do-app/tree/main" target='_blank' className="block text-lg font-medium">My Projects</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
