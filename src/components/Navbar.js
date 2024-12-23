import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 ${isScrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-xl font-semibold text-white hover:text-blue-800">
          MyPortfolio
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-white hover:text-blue-600">Home</Link></li>
          <li><Link to="/about/" className="text-white hover:text-blue-600">About</Link></li>
          <li><Link to="/projects/" className="text-white hover:text-blue-600">Projects</Link></li>
          <li><Link to="/skills/" className="text-white hover:text-blue-600">Skills</Link></li>
          <li><Link to="/contact/" className="text-white hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Hamburger button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white z-40"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 h-auto" : "-translate-y-full opacity-0 h-0"
        }`}
        style={{ transition: "all 0.3s ease-in-out", zIndex: 20 }}
      >
        <ul className="space-y-4 p-6">
          <li><Link to="/" className="block text-white">Home</Link></li>
          <li><Link to="/about/" className="block text-white">About</Link></li>
          <li><Link to="/projects/" className="block text-white">Projects</Link></li>
          <li><Link to="/skills/" className="block text-white">Skills</Link></li>
          <li><Link to="/contact/" className="block text-white">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
