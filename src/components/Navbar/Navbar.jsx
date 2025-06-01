import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/aboutme' },
    { name: 'TEAM', path: '/team' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GIGS', path: '/gigs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="bg-teal-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4     sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-black ">
            <a href="/">StackVision</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-black items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-emerald-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-teal-50 px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
