import React, { useEffect } from "react";
import { Link } from "gatsby";
import heroImage from "../images/hero-image.jpg";
import { useState } from "react";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 ease-in-out transform ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hi, I'm <span className="text-blue-500">Jobet Casquejo</span>
          </h1>
          <p
            className={`text-lg md:text-xl mb-6 transition-all duration-1000 ease-in-out transform ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Salesforce Dev, Java Dev, Community Support, E-Learning, Data
            Storytelling
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/about/"
              className={`text-xl font-semibold text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in-out transform ${
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
