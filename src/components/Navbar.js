import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300`}
      >
        <Link
          to="/"
          className="text-xl font-semibold text-white hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
          MyPortfolio
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects/"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills/"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 left-0 bg-gray-800 bg-opacity-90 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 h-auto"
            : "-translate-y-full opacity-0 h-0"
        }`}
        style={{
          maxHeight: "50vh",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-3xl text-white z-40"
          aria-label="Close mobile menu"
          style={{
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          &times;
        </button>
        <ul className="space-y-4 p-6">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              className="block text-white hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects/"
              className="block text-white hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills/"
              className="block text-white hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              className="block text-white hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
