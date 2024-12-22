import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-lg font-semibold mb-2">Jobet Casquejo</p>
          <p className="text-sm mb-2">Salesforce and Java Developer</p>
          <p className="text-sm mb-2">© 2024 All Rights Reserved</p>
          <div className="mt-4">
            <p className="text-sm">Address: Cagay-anon, Sinacaban, Misamis Occidental, Phillipines</p>
          </div>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://github.com/jobet1130"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-500 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/jobet-casquejo-921840232/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-500 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:jobetcasquejo221@gmail.com"
            className="text-white hover:text-teal-500 transition duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      <div className="text-center mt-6">
        <a
          href="#top"
          className="text-teal-500 hover:text-teal-400 transition duration-300 flex justify-center items-center"
        >
          <FaArrowUp size={30} />
          <span className="ml-2">Back to Top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
